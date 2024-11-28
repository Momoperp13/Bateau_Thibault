
import { Routes } from '@angular/router';
import { TabBarComponent } from './tab-bar/tab-bar.component';

export const routes: Routes = [
  {
    path: '',
    component: TabBarComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'recette',
        loadComponent: () =>
          import('./recettes/recettes.page').then((m) => m.RecettesPage),
      },
      {
        path: 'Restaurants',
        loadComponent: () =>
          import('./restaurants/restaurants.page').then(
            (m) => m.RestaurantsPage
          ),
      },
      {
        path: 'Bateau',
        loadComponent: () =>
          import('./bateaux/bateaux.page').then((m) => m.BateauxPage),
      },
      {
        path: 'Produit',
        loadComponent: () =>
          import('./produits/produits.page').then((m) => m.ProduitsPage),
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.page').then((m) => m.ContactPage),
  },
  {
    path: 'detail-recette',
    loadComponent: () =>
      import('./detail-recette/detail-recette.page').then(
        (m) => m.DetailRecettePage
      ),
  },
  {
    path: 'detail-restaurant',
    loadComponent: () =>
      import('./detail-restaurant/detail-restaurant.page').then(
        (m) => m.DetailRestaurantPage
      ),
  },
  {
    path: 'detail-produit',
    loadComponent: () =>
      import('./detail-produit/detail-produit.page').then(
        (m) => m.DetailProduitPage
      ),
  },
  {
    path: 'panier',
    loadComponent: () => import('./panier/panier.page').then((m) => m.PanierPage),
  },
  {
    path: 'bateau-detail',
    loadComponent: () =>
      import('./bateau-detail/bateau-detail.page').then((m) => m.BateauDetailPage),
  },
  {
    path: 'formulaire',
    loadComponent: () =>
      import('./formulaire/formulaire.page').then((m) => m.FormulairePage),
  },
  {
    path: 'commande',
    loadComponent: () =>
      import('./commande/commande.page').then((m) => m.CommandePage),
  },
  // Route wildcard pour gérer les pages inexistantes
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];

