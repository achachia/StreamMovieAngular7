import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {


    uri = '';


  constructor(private http: HttpClient) {

         if(environment.production){

                   this.uri = environment.uri_cloud;

         } else{

                   this.uri = environment.uri_local;

      }




  }

  getLastSortieMovies() {

    return this.http.get(this.uri + 'LastSortieMoviesFrByAngular');

  }

  getLastSortieMoviesCartoon() {

    return this.http.get(this.uri + 'LastSortieMoviesCartoonByAngular');

  }

  getLastMoviesPopulaires() {

    return this.http.get(this.uri + 'LastMoviesPopulairesByAngular');

  }


  getLastAjoutMovies() {

    return this.http.get(this.uri + 'LastAjoutMoviesByAngular');

  }

  getAllMoviesFr() {

    return this.http.get(this.uri + 'AllMoviesFrByAngular');

  }

  getAllMoviesFrTop100() {

    return this.http.get(this.uri + 'AllMoviesFrTop100ByAngular');

  }

  getAllMoviesFrCartoons() {

    return this.http.get(this.uri + 'AllMoviesFrCartoonsByAngular');

  }

  getAllMoviesFrPopulaires() {

    return this.http.get(this.uri + 'AllMoviesFrPopulairesByAngular');

  }

  getinfosMovie( obj_infos) {

    return this.http.post(this.uri + 'infosMovieByAngular', obj_infos);

  }

  getAllGeneres() {

    return this.http.get(this.uri + 'AllGenresByAngular');

  }

  getAllAnnees() {

    return this.http.get(this.uri + 'AllAnneesByAngular');

  }


  getAllMoviesFrBySearch(obj_infos) {

    return this.http.post(this.uri + 'SearchByGenreByAneeByAngular', obj_infos);

  }

  sendFormulaireContact(obj_message) {

    return this.http.post(this.uri + 'validateFormContactByAngular', obj_message);

  }


  /***************************   Fonctions espace admin *************************** */

  postIdentificationAdmin(obj_login){


    return this.http.post(this.uri + 'loginUser', obj_login);


  }

}
