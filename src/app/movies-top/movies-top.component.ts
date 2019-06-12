import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-top',
  templateUrl: './movies-top.component.html',
  styleUrls: ['./movies-top.component.css']
})
export class MoviesTopComponent implements OnInit {

  movies: movie[];

  p: Number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

     this.movieService.getAllMoviesFrTop100().subscribe((data: movie[]) => {

           this.movies = data;
     
      });
  }

}
