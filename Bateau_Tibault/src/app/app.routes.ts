import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recettes',
    loadComponent: () => import('./recettes/recettes.page').then( m => m.RecettesPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
  },
  {
    path: 'produits',
    loadComponent: () => import('./produits/produits.page').then( m => m.ProduitsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
];
