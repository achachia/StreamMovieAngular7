import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import movie from '../../Movie.Model';
import { MoviesService } from '../../movies.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-admin-display-fiche-movie',
  templateUrl: './admin-display-fiche-movie.component.html',
  styleUrls: ['./admin-display-fiche-movie.component.css']
})
export class AdminDisplayFicheMovieComponent implements OnInit {

  movie: movie[];

  url: SafeResourceUrl;

  iframe : SafeResourceUrl;

  user = {uid : ""};

  infos = {
              key :  '',
              section  : ''
           };

  infos_server = {

              nom_server : '',

              url : '',

              url_formate : '',

              qualite_server : ''

  };

   isloader=false;

   uri = '';

  

  id_movie = '';

  constructor(private route: ActivatedRoute,private router: Router,private movieService: MoviesService,
                  public sanitizer:DomSanitizer,private cookieService: CookieService) {

        if(this.cookieService.get('userAdmin')){

                 this.user = JSON.parse(this.cookieService.get('userAdmin'));

                 if(environment.production){

                        this.uri = environment.uri_cloud;

                } else{

                        this.uri = environment.uri_local;

                 }

         }else{


                 this.router.navigate(['gestion-admin/login']);

           }


   }

  ngOnInit() {

   this.route.params.subscribe(params => {

   
        

        this.infos.key = params['key'];
        
        this.infos.section = params['section'];

        this.movieService.getinfosMovie(this.infos).subscribe((data: movie[]) => {

               this.movie = data;

               this.id_movie=this.movie[0]['titre_originale']+'/'+ this.movie[0]['key'];

               for (var key_video  in  this.movie[0]['list_videos']) {

                      this.movie[0]['list_videos'][key_video].url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.movie[0]['list_videos'][key_video].key);

                  }

          })

    })

  }

  lecteur_movie(type_lecteur, server) {

      this.isloader = true;

      let url = '';

     // alert(this.infos.section);


     //  this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/WfwodlBGHKg");

     if(type_lecteur === 'ivmox.com'){

        url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;


     }

     if(type_lecteur === 'Kvid'){

         url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;

     }

     
     if( type_lecteur === 'ok.ru' ){

         url = 'ok.ru/videoembed/' + server.identifiant_streaming;


      }

      if( type_lecteur === 'Uptostream' ){

        url = 'https://uptostream.com/iframe/' + server.identifiant_streaming;


     }

     if( type_lecteur === 'GoogleContentUser' ){
     

      url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;


      }

      console.log(server);

      this.infos_server.nom_server = type_lecteur;

      this.infos_server.url = server.url;

      this.infos_server.url_formate = url;

     // this.infos_server.url_formate = server.url;

  
      this.isloader = false;

       this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    


  }

}
