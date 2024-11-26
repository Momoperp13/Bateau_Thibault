import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../models/restaurants';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList, IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class RestaurantsPage implements OnInit {

  restaurantsList!: Restaurant[];
  constructor(private router:Router, private restaurantsService:RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().subscribe(res=>{
      console.log(res);
      this.restaurantsList = res.restaurants
    },
    err =>{
      console.log("error")
    }
  );
  }  
  onLoadRestaurant(restaurant:{name:String, presentation : String [], image:String}){
    
    let navigationExtras: NavigationExtras = {
      state:{
        restaurant:restaurant
        
      }
    };

    this.router.navigate(['/detail-restaurant'],navigationExtras);
  }

}
