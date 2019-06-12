import { Component, OnInit } from '@angular/core';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  genres: any [];

  annees: any [];

  criteres = {

           genre : "",
           annee :""
  };

  movies: movie[];

  p: Number = 1;

  isvalid: Boolean = false ;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {


    this.movieService.getAllGeneres().subscribe((data: any []) => {

          this.genres = data;

      });

      this.movieService.getAllAnnees().subscribe((data: any []) => {

            this.annees = data;

        });
  }

  public onFormSubmit() {

    this.criteres.genre = this.criteres.genre;

    this.criteres.annee = this.criteres.annee; 


    this.movieService.getAllMoviesFrBySearch(this.criteres).subscribe((data: movie[]) => {

           this.movies = data;

           this.isvalid = true;
     
     });
    
   
    
    }

}
