import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonImg, IonButton,IonButtons,IonIcon } from '@ionic/angular/standalone';
import  { TabBarComponent } from '../tab-bar/tab-bar.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonImg,
    TabBarComponent,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class HomePage {
  constructor() {}
}
