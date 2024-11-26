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


  ngOnInit() {}
}
