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
ngOnInit() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    this.products = JSON.parse(storedCart);
  } else {
    this.products = [];
  }

  console.log('Produits dans le panier:', this.products);
}

onDeleteProduitFromCart(productId: number) {
  this.products = this.products.filter((product: any) => product.id !== productId);

  localStorage.setItem('cart', JSON.stringify(this.products));

  console.log('Produit supprimé, nouveau panier:', this.products);
}

onGoToproduitDetail(product: any) {
  this.router.navigate(['detail-produit'], {
    state: { produit: product }, 
  });
}

  onGoToFormulaire(){
    this.router.navigate(['/formulaire'])
  }
  onGoToProduits(){
    this.router.navigate(['/Produit'])
  }
}

