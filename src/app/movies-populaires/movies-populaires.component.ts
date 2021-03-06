import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-populaires',
  templateUrl: './movies-populaires.component.html',
  styleUrls: ['./movies-populaires.component.css']
})
export class MoviesPopulairesComponent implements OnInit {

  movies: movie[];

  p: Number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

    this.movieService.getAllMoviesFrPopulaires().subscribe((data: movie[]) => {

            this.movies = data;
     
       });
  }

}
