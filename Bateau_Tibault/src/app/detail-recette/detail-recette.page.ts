import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonButtons,IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-detail-recette',
  templateUrl: './detail-recette.page.html',
  styleUrls: ['./detail-recette.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonIcon,IonButtons]
})
export class DetailRecettePage implements OnInit {
  recette!:{
    name : String,
    hint:String,
    preparation : String[],
    image:String
  }
  constructor(private route:ActivatedRoute, private router: Router) { }

  onGoToRecettes(){
    this.router.navigate(['/recette'])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.recette = this.router.getCurrentNavigation()?.extras.state?.['recette'];
      }
    })
  }

}
