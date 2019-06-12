import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-movies-fr',
  templateUrl: './all-movies-fr.component.html',
  styleUrls: ['./all-movies-fr.component.css']
})
export class AllMoviesFrComponent implements OnInit {

  movies: movie[];

  p: Number = 1;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

       this.movieService.getAllMoviesFr().subscribe((data: movie[]) => {

                   this.movies = data;
                  
       });
  }

  

}
