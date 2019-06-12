import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,ActivatedRoute } from '@angular/router';


  import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Movie Stream';

  is_admin = false;

  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router,private activatedRoute:ActivatedRoute) {

    const url=window.location.href;

    const array_url = url.split('/');

    if(array_url[3] === 'gestion-admin'){

      this.is_admin = true;

    }


    if(environment.production){

       console.log('Site En production');

    } else{

      console.log('Site En developpement');


    }



    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }


}
