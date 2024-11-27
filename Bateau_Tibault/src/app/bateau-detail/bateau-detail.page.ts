import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonLabel,IonItem,IonIcon,IonBackButton, IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bateau-detail',
  templateUrl: './bateau-detail.Page.html',
  styleUrls: ['./bateau-detail.Page.scss'],
  standalone: true,
  imports: [IonLabel,IonItem,IonIcon,IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BateauDetailPage implements OnInit {
  bateau!:{
    name : String,
    presentation : String[],
    image:String
  }
  constructor(private route:ActivatedRoute, private router: Router) { 
  }
  onGoToBateau(){
    this.router.navigate(['/Bateau'])  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.bateau = this.router.getCurrentNavigation()?.extras.state?.['bateau'];
      }
    })
  }


}


