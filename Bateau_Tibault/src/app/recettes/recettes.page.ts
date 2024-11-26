import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonRippleEffect, IonButtons,IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonRippleEffect,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList, IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class RecettesPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    // this.appereilsList = this.appereilsService.appereilsList.slice();
  }  
  onCardClick() {
    this.router.navigate(['/bateau-detail']);
  }
}


