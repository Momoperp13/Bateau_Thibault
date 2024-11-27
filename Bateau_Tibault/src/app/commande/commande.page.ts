import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
  standalone: true,
  imports: [IonContent,
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
    DatePipe
  ]
})
export class CommandePage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentDate: Date = new Date();
  // produit!:{
  //   name : String,
  //   prix:number,
  //   image:String
  // }
  formulaire!:
    {
    nom:String,
    numero:String,
    rue:String,
    ville: String,
    code_postale:number,
    pays: String
    }
  
  products = [
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
  ];
  total:number=0;
// à la palce de Products on va mettre ce qu'on va recuperer de local storage
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.formulaire = this.router.getCurrentNavigation()?.extras.state?.['formulaire'];
      }
    })
    
    this.products.forEach(product => {this.total+=product.price*product.quantity;
      
    });
    console.log('prod', this.products);
  }

  

}
