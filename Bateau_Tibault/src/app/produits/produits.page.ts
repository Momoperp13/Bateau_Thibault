import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
import { Produit } from '../models/produits';
import { ProduitsService } from '../services/produits.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class ProduitsPage implements OnInit {

  produitsList!: Produit[];
  constructor(private router:Router, private produitsService:ProduitsService, private storage:Storage) { }

  ngOnInit() {
    this.produitsService.getProduits().subscribe(res=>{
      console.log(res);
      this.produitsList = res.produits
      
    },
    err =>{
      console.log("error")
    }
  );
  }  
  onLoadProduit(produit:{name:String, prix : number, image:String}){
    
    let navigationExtras: NavigationExtras = {
      state:{
        produit:produit
        
      }
    };

    this.router.navigate(['/detail-produit'],navigationExtras);
  }
}
