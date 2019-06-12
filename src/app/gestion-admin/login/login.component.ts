import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MoviesService } from '../../movies.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ObjetLogin = {

               email : "",
               password :"" 
           };

  user = {uid : ""};


  constructor(private movieService: MoviesService,private route: ActivatedRoute,private router: Router
              ,private cookieService: CookieService) {}

  ngOnInit() {

          if(this.cookieService.get('userAdmin')){

                this.router.navigate(['gestion-admin/home']);

          }


   }

  public onFormSubmit() {

    this.movieService.postIdentificationAdmin(this.ObjetLogin).subscribe((data) => {

              this.user.uid = data['uid'];

              this.cookieService.set( 'userAdmin', JSON.stringify(this.user) );

               this.router.navigate(['gestion-admin/home']);





      });


 }

}
