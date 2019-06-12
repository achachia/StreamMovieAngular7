import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import movie from '../../Movie.Model';
import { MoviesService } from '../../movies.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-cartoons',
  templateUrl: './admin-cartoons.component.html',
  styleUrls: ['./admin-cartoons.component.css']
})
export class AdminCartoonsComponent implements OnInit {

  movies: movie[];

  user = {uid : ""};

  p: Number = 1;

  constructor(private route: ActivatedRoute,private router: Router,private movieService: MoviesService
              ,private cookieService: CookieService) { }

  ngOnInit() {

      if(this.cookieService.get('userAdmin')){

             this.user = JSON.parse(this.cookieService.get('userAdmin'));       
             
             this.movieService.getAllMoviesFrCartoons().subscribe((data: movie[]) => {

                 this.movies = data;
         
             });

       }else{


            this.router.navigate(['gestion-admin/login']);

       }

      
  }

}
