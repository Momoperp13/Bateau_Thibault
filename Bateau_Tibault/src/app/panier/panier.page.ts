import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
  IonGrid,
  IonItem,
  IonRow,
  IonCol,
  IonList,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonThumbnail,
  
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonIcon,
    IonLabel,
    IonButton,
    IonImg,
    IonGrid,
    IonItem,
    IonRow,
    IonCol,
    IonList,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButtons,
    IonThumbnail,
    NgFor,
    DatePipe,
  ],
})
export class PanierPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentDate: Date = new Date();

  products!: any;
// à la palce de Products on va mettre ce qu'on va recuperer de local storage
ngOnInit() {
  const storedCart = localStorage.getItem('cart'); // Récupère le panier du Local Storage
  if (storedCart) {
    this.products = JSON.parse(storedCart); // Convertit la chaîne JSON en tableau d'objets
  } else {
    this.products = []; // Panier vide si aucune donnée n'est trouvée
  }

  console.log('Produits dans le panier:', this.products);
}

onDeleteProduitFromCart(productId: number) {
  // Filtrer les produits pour exclure celui avec l'id donné
  this.products = this.products.filter((product: any) => product.id !== productId);

  // Mettre à jour le Local Storage avec le nouveau panier
  localStorage.setItem('cart', JSON.stringify(this.products));

  console.log('Produit supprimé, nouveau panier:', this.products);
}

onGoToproduitDetail(product: any) {
  this.router.navigate(['detail-produit'], {
    state: { produit: product }, // Passe les détails du produit via le state
  });
}

  onGoToFormulaire(){
    this.router.navigate(['/formulaire'])
  }
}
