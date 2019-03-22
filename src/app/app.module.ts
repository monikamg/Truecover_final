import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { MovieService } from './movie.service';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:movieID', component: MovieComponent }

 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    UpcomingMoviesComponent,
  
    PopularMoviesComponent,
  
    MovieComponent,

    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }