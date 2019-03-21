import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'b7a0727f36b14c9d1b10edc0d1b82310';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }

  getUpcomingMovies() {
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2019-01-15&primary_release_date.lte=2019-07-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

}


// Get popular movies api
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=API_KEY

// Get upcoming movies api
// tslint:disable-next-line:max-line-length
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31&api_key=API_KEY

// Search movies api
// https://api.themoviedb.org/3/search/movie?query=SEARCH_STRING&api_key=API_KEY

// Get movie from api
// https://api.themoviedb.org/3/movie/ID?api_key=API_KEY