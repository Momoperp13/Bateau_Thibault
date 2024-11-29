import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonThumbnail,IonCard,IonButton,IonInput,IonLabel,IonItem,IonIcon,IonBackButton, IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
// import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
  standalone: true,
  imports: [IonThumbnail,IonCard,IonButton,IonInput,IonLabel,IonItem,IonIcon,IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailProduitPage implements OnInit {
  produit!:{
    id:number,
    name : String,
    presentation : String[],
    prix:number
    image:String
  }
  quantite:number=1;
  total:number=0;
  constructor(private route:ActivatedRoute, private router: Router) { 
  }
  onGoToProduits(){
    this.router.navigate(['/Produit'])}
  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.
      extras.state){
        this.produit = this.router.getCurrentNavigation()?.
        extras.state?.['produit'];
      }
    })

  }
  addQuantite(){
    this.quantite+=1;
  }
  removeQuantite(){
    if (this.quantite > 1) {
      this.quantite -= 1;
    }
  }
  calculerTotal(): number {
    return this.quantite * this.produit.prix;
  }

  addToCart(produit: any) {
    const productToAdd = {
      id: produit.id,
      name: produit.name,
      prix: produit.prix,
      image:produit.image,
      quantite: this.quantite,
      total:produit.prix*this.quantite,
    };
    const cart = JSON.parse(localStorage.
      getItem('cart') || '[]');
    const existingProductIndex = cart.
    findIndex((p: any) => p.id === produit.id);

  if (existingProductIndex > -1) {
   
    cart[existingProductIndex].quantite = this.quantite;
    cart[existingProductIndex].total = produit.prix * this.quantite;
  } else {

    cart.push(productToAdd);
  }


  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Produit ajouté/mis à jour dans le panier', cart);
}
 onGoToPanier(){
  this.addToCart(this.produit);
  this.router.navigate(['/panier']);
 }
}

