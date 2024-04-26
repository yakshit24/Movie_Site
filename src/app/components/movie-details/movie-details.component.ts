import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() 
  movie: any;
  showDetails: boolean = false;
  movieId!: number;
  
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];

      if (!isNaN(this.movieId)) {
        this.movieService.getMovieDetails(this.movieId).subscribe(data => {
          this.movie = data;
        });
      } else {
        console.error('Invalid movie ID');
      }
    });
  
  }

}
