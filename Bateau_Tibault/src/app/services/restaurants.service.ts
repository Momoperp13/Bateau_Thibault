import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurantsList!:Restaurant[];

  constructor(private http:HttpClient){}

  getRestaurants(){
    return this.http.get<{restaurants:Restaurant[]}>('assets/data/restaurants.json')
  }
}
