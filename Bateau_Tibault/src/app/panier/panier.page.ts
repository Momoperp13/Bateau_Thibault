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
  // produit!:{
  //   name : String,
  //   prix:number,
  //   image:String
  // }

  products!: any;
// à la palce de Products on va mettre ce qu'on va recuperer de local storage
  ngOnInit() {
    this.products = [
      {
        name: 'Produit 1',
        image: 'assets/images/daurade.jpg',
        quantity: 2,
        price: 20.0,
      },
      {
        name: 'Produit 2',
        image: 'assets/images/daurade.jpg',
        quantity: 1,
        price: 15.5,
      },
      {
        name: 'Produit 3',
        image: 'assets/images/daurade.jpg',
        quantity: 3,
        price: 10.0,
      },
    ];
    console.log('prod', this.products);
  }

  onGoToproduitDetail() {
    this.router.navigate(['detail-produit']);
  }

  onDeleteProduitFronCart(){

  }
}
