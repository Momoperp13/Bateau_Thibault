import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle,IonButtons, IonThumbnail} from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle,IonButtons,IonThumbnail]
})
export class PanierPage implements OnInit {

  currentDate: Date = new Date();
  produit!:{
    name : String,
    prix:number,
    image:String
  }
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
  }

}
