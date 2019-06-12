import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

  movies: movie[];

  p: Number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

      this.movieService.getAllMoviesFrCartoons().subscribe((data: movie[]) => {

          this.movies = data;
     
       });
  }

}
