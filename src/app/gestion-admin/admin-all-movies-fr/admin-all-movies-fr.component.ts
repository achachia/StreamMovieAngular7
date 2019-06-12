import { Component, OnInit } from '@angular/core';
import movie from '../../Movie.Model';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-all-movies-fr',
  templateUrl: './admin-all-movies-fr.component.html',
  styleUrls: ['./admin-all-movies-fr.component.css']
})
export class AdminAllMoviesFrComponent implements OnInit {

  movies: movie[];

  p: Number = 1;

  user = {uid : ""};

  constructor(private route: ActivatedRoute,private router: Router,private movieService: MoviesService
             ,private cookieService: CookieService) {

        if(this.cookieService.get('userAdmin')){

                this.user = JSON.parse(this.cookieService.get('userAdmin'));

        }else{


                this.router.navigate(['gestion-admin/login']);

          }


     }

  ngOnInit() {

    this.movieService.getAllMoviesFr().subscribe((data: movie[]) => {

                this.movies = data;
               
    });
}

}
