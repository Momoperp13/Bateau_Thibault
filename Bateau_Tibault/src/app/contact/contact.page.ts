import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonIcon,
    IonAvatar,
    IonLabel,
    IonList,
    IonItem

  ],
})
export class ContactPage implements OnInit {
  constructor(private router: Router) {}
  onGoToHome() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {}
}
