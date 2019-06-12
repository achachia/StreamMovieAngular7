import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import movie from '../Movie.Model';
import { MoviesService } from '../movies.service';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-fiche-movie',
  templateUrl: './fiche-movie.component.html',
  styleUrls: ['./fiche-movie.component.css']
})
export class FicheMovieComponent implements OnInit {

  movie: movie[];

  url: SafeResourceUrl;

  iframe : SafeResourceUrl;

  infos = {
              key :  '',
              section  : ''
           };

   isloader = false;

  uri = '';

  id_movie = '';

  constructor(private route: ActivatedRoute,private router: Router,private movieService: MoviesService,public sanitizer:DomSanitizer) {


        if(environment.production){

                  this.uri = this.uri = environment.uri_cloud;

        } else{

                  this.uri = environment.uri_local;

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

     if(type_lecteur == 'ivmox.com'){

            if(server.url_curl_short){

                     url=server.url_curl_short;


               }else{

                      url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;

                 }


     }

     if(type_lecteur == 'Kvid'){

         url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;

     }

     
     if( type_lecteur == 'ok.ru' ){

         url = 'ok.ru/videoembed/' + server.identifiant_streaming;


      }

      if( type_lecteur == 'Uptostream' ){

        url = 'https://uptostream.com/iframe/' + server.identifiant_streaming;


     }

     if( type_lecteur == 'GoogleContentUser' ){
     

      url = this.uri + 'iframMovie/' + this.infos.section + '/' + this.movie[0].key + '/' + server.id_link;


   }

  
      this.isloader = false;

      if(server.url_curl_short){

        window.open(url, "_blank");


      }else{

        this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }

       

      

    


  }

}
