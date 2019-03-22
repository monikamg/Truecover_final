import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'b7a0727f36b14c9d1b10edc0d1b82310';
  public _http: HttpClient;
  upcoming_movies:any;
  
  constructor(public movieService: MovieService) { 

    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });

  }

  ngOnInit() {
  }

}
