import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';


import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'b7a0727f36b14c9d1b10edc0d1b82310';
  public _http: HttpClient
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  heroes = HEROES;
  selectedHero: any;
 // movieSelected=any;

  movie_id:Number;

  constructor(public movieService: MovieService) {
    // get upcoming movies
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });

  }

  // get search results of movies
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });
  }

 // onSelect(hero: Hero): void {
   // this.selectedHero = hero;
 // }

   onSelect(hero: number):void{
   // this._http.get(this.movie_url + 'movie/' + hero + '?api_key=' + this.api_key);
    this.selectedHero=hero;
    this.movieService.getMovie(hero).subscribe(data => {
    this.selectedHero= data;
   });
  }

  ngOnInit() {
  }

}