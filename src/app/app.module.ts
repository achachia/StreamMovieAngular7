import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import { CookieService } from 'ngx-cookie-service';




import { AppComponent } from './app.component';
import { AllMoviesFrComponent } from './all-movies-fr/all-movies-fr.component';
import { MoviesPopulairesComponent } from './movies-populaires/movies-populaires.component';
import { MoviesTopComponent } from './movies-top/movies-top.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';


import { MoviesService } from './movies.service';
import { FicheMovieComponent } from './fiche-movie/fiche-movie.component';
import { NotFindPageComponent } from './not-find-page/not-find-page.component';
import { LoginComponent } from './gestion-admin/login/login.component';
import { HomeComponent } from './gestion-admin/home/home.component';
import { AdminAllMoviesFrComponent } from './gestion-admin/admin-all-movies-fr/admin-all-movies-fr.component';
import { AdminDisplayFicheMovieComponent } from './gestion-admin/admin-display-fiche-movie/admin-display-fiche-movie.component';
import { AdminCartoonsComponent } from './gestion-admin/admin-cartoons/admin-cartoons.component';

@NgModule({
  declarations: [AppComponent,AllMoviesFrComponent,MoviesPopulairesComponent,MoviesTopComponent,CartoonsComponent,
                 SearchMoviesComponent,ContactComponent,AccueilComponent, FicheMovieComponent,
                  NotFindPageComponent, LoginComponent, HomeComponent, 
                  AdminAllMoviesFrComponent, AdminDisplayFicheMovieComponent, AdminCartoonsComponent],
  imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            SlimLoadingBarModule,
            NgxPaginationModule,
            FormsModule
          ],
  providers: [MoviesService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
