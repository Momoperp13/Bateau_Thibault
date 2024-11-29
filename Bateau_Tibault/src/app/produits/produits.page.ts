import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
import { Produit } from '../models/produits';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [IonButtons,IonContent, FormsModule, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class ProduitsPage implements OnInit {

  produitsList!: Produit[];
  filteredItems! : Produit[];
  searchText:String = "";
  constructor(private router:Router, private produitsService:ProduitsService) { }

  ngOnInit() {
    this.produitsService.getProduits().subscribe(res=>{
      console.log(res);
      this.produitsList = res.produits
      this.filteredItems = res.produits
      
    },
    err =>{
      console.log("error")
    }
  );
  }  
  onLoadProduit(produit:{id: number, name:String, 
    prix : number, image:String}){
    
    let navigationExtras: NavigationExtras = {
      state:{
        produit:produit   
      }
    }

    this.router.navigate(['/detail-produit'],navigationExtras);
  }
  filterItems() {
    this.filteredItems = this.produitsList.filter(produit=>
      produit.name.toLowerCase().includes(
        this.searchText.toLowerCase())
    );
  }
  goToCart() {
    this.router.navigate(['/panier']);  // 'panier' doit correspondre au chemin défini dans les routes
  }
}



