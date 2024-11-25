import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonLabel,IonItem,IonIcon,IonBackButton, IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
  standalone: true,
  imports: [IonLabel,IonItem,IonIcon,IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProduitsPage implements OnInit {

  constructor() { 
    this.initializeApp();
  }

  ngOnInit() {
  }
  initializeApp() {
    // Change la couleur de la barre d'état
    StatusBar.setBackgroundColor({ color: '#90CAF9' });
  }

}

