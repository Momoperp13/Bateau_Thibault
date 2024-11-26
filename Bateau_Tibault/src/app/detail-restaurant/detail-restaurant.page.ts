import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonButtons,IonIcon } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-restaurant',
  templateUrl: './detail-restaurant.page.html',
  styleUrls: ['./detail-restaurant.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonIcon,IonButtons]
})
export class DetailRestaurantPage implements OnInit {

  restaurant!:{
    name : String,
    presentation : String[],
    image:String
  }
  constructor(private route:ActivatedRoute, private router: Router) { }

  onGoToRestaurants(){
    this.router.navigate(['/Restaurants'])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.restaurant = this.router.getCurrentNavigation()?.extras.state?.['restaurant'];
      }
    })
  }


}
