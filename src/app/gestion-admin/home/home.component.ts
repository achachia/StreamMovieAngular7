import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user = {uid : ""};

  constructor(private movieService: MoviesService,private route: ActivatedRoute,private router: Router
    ,private cookieService: CookieService) {}

  ngOnInit() {    

       

        if(this.cookieService.get('userAdmin')){

             this.user = JSON.parse(this.cookieService.get('userAdmin'));            

        }else{


          this.router.navigate(['gestion-admin/login']);

        }

        

  }

}
