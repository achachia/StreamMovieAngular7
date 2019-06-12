import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  LastSortieMovies: movie[];

  LastSortieMoviesCartoon: movie[];

  LastMoviesPopulaires: movie[];

  LastAjoutMovies: movie[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {

    this.movieService.getLastSortieMovies().subscribe((data: movie[]) => {

      this.LastSortieMovies = data;
     
    });

    this.movieService.getLastSortieMoviesCartoon().subscribe((data: movie[]) => {

      this.LastSortieMoviesCartoon = data;
     
    });

    this.movieService.getLastMoviesPopulaires().subscribe((data: movie[]) => {

      this.LastMoviesPopulaires = data;
     
    });

    this.movieService.getLastAjoutMovies().subscribe((data: movie[]) => {

      this.LastAjoutMovies = data;
     
    });


  }

}
