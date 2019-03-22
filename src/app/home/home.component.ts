import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';



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
  selectedHero: any;

  movie_id:Number;

  constructor(public movieService: MovieService) {
  }

  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
    });
  }



   onSelect(hero: number):void{
    this.selectedHero=hero;
    this.movieService.getMovie(hero).subscribe(data => {
    this.selectedHero= data;
   });
  }

  ngOnInit() {
  }

}