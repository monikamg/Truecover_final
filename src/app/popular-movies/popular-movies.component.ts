import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'b7a0727f36b14c9d1b10edc0d1b82310';
  public _http: HttpClient;
  popular_movies: any;

  constructor(public movieService: MovieService) { 
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });
  }

  ngOnInit() {
  }

}
