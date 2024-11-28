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
  IonSearchbar,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,

} from '@ionic/angular/standalone';
import { Bateau } from '../models/bateaux';
import { BateauService } from '../services/bateau.service';
import { NavigationExtras, Router } from '@angular/router';


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
    IonSearchbar,
    IonList,
    IonGrid,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardTitle,

  ],
})
export class BateauxPage implements OnInit {

  bateauxList!: Bateau[];
  filteredItems!:Bateau[];
  searchText:String = "";
  constructor(private router:Router, private bateauService:BateauService) {}


  ngOnInit() {
    this.bateauService.getBateaux().subscribe(res=>{
      console.log(res);
      this.bateauxList = res.bateau
      this.filteredItems =res.bateau
    },
    err =>{
      console.log("error")
    }
    );
  }
  onLoadBateau(bateau:{name:String, presentation : String [], image:String}){
    
    let navigationExtras: NavigationExtras = {
      state:{
        bateau:bateau
        
      }
    };

    this.router.navigate(['/bateau-detail'],navigationExtras);
  }

  filterItems() {
    this.filteredItems = this.bateauxList.filter(bateau=>
      bateau.name.toLowerCase().includes(this.searchText.toLowerCase())
      
    );
    console.log(this.filteredItems)
  }
  goToCart() {
    this.router.navigate(['/panier']);  // 'panier' doit correspondre au chemin défini dans les routes
  }

}
