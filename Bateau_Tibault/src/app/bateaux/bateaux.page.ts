import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonButtons,
  IonCard,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonIcon,
    IonButtons,
    IonCard,
    IonItem,
    IonLabel,
    IonThumbnail,
  ],
})
export class BateauxPage implements OnInit {
  constructor() {}
  currentDate: Date = new Date();

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
    {
      name: 'Produit 3',
      image: 'assets/images/daurade.jpg',
      quantity: 3,
      price: 10.0,
    },
  ];

  ngOnInit() {}
}
