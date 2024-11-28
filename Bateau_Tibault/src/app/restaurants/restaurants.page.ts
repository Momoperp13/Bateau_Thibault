import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
import { Restaurant } from '../models/restaurants';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
  standalone: true,
  imports: [IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList, IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class RestaurantsPage implements OnInit {

  restaurantsList!: Restaurant[];
  filteredItems!:Restaurant[];
  searchText:String = "";
  constructor(private router:Router, private restaurantsService:RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().subscribe(res=>{
      console.log(res);
      this.restaurantsList = res.restaurants
      this.filteredItems = res.restaurants
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
  filterItems() {
    this.filteredItems = this.restaurantsList.filter(restaurant=>
      restaurant.name.toLowerCase().includes(this.searchText.toLowerCase())
      
    );
    console.log(this.filteredItems)
  }
  goToCart() {
    this.router.navigate(['/panier']);  // 'panier' doit correspondre au chemin défini dans les routes
  }


}
