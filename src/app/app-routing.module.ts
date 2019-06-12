import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Frendend
import { AccueilComponent } from './accueil/accueil.component';
import { AllMoviesFrComponent } from './all-movies-fr/all-movies-fr.component';
import { MoviesPopulairesComponent } from './movies-populaires/movies-populaires.component';
import { MoviesTopComponent } from './movies-top/movies-top.component';
import { CartoonsComponent } from './cartoons/cartoons.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { ContactComponent } from './contact/contact.component';
import { FicheMovieComponent } from './fiche-movie/fiche-movie.component';
import { NotFindPageComponent } from './not-find-page/not-find-page.component';


//Backend
import { LoginComponent } from './gestion-admin/login/login.component';
import { HomeComponent } from './gestion-admin/home/home.component';
import { AdminAllMoviesFrComponent } from './gestion-admin/admin-all-movies-fr/admin-all-movies-fr.component';
import { AdminDisplayFicheMovieComponent } from './gestion-admin/admin-display-fiche-movie/admin-display-fiche-movie.component';
import { AdminCartoonsComponent } from './gestion-admin/admin-cartoons/admin-cartoons.component';




const routes: Routes = [
    {
        path: '',
        component: AccueilComponent
    },
    {
      path: 'displayFicheMovie',
      component: FicheMovieComponent
  },
  {
    path: 'all_Movies_Fr',
    component: AllMoviesFrComponent
  },
  {
    path: 'movies_populaires',
    component: MoviesPopulairesComponent
  },
  {
    path: 'movies_top_100',
    component: MoviesTopComponent
  },
  {
    path: 'cartoons',
    component: CartoonsComponent
  },
  {
    path: 'search_movie_by_genre_annee',
    component: SearchMoviesComponent
  },
  {
    path: 'search_movie_by_genre_annee/displayFicheMovie',
    component: FicheMovieComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'all_Movies_Fr/displayFicheMovie',
    component: FicheMovieComponent
  },
  {
    path: 'movies_populaires/displayFicheMovie',
    component: FicheMovieComponent
  },
  {
    path: 'cartoons/displayFicheMovie',
    component: FicheMovieComponent
  },
  {
    path: 'movies_top_100/displayFicheMovie',
    component: FicheMovieComponent
  },
  {
    path: 'gestion-admin/login',
    component: LoginComponent
  },
  {
    path: 'gestion-admin/home',
    component: HomeComponent
  }, 
  {
    path: 'gestion-admin/AllMoviesFr',
    component: AdminAllMoviesFrComponent
  }, 
  {
    path: 'gestion-admin/Cartoons',
    component: AdminCartoonsComponent
  }, 
  {
    path: 'gestion-admin/AllMoviesFr/displayFicheMovie',
    component: AdminDisplayFicheMovieComponent
  }, 
  {
    path: 'gestion-admin/Cartoons/displayFicheMovie',
    component: AdminDisplayFicheMovieComponent
  },
  {
    path: '**',
    component: NotFindPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}