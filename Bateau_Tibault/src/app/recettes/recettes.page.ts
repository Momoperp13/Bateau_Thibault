import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { NavigationExtras, Router } from '@angular/router';
import { Recette } from '../models/recettes';
import { RecettesService } from '../services/recettes.service';


@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList, IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class RecettesPage implements OnInit {
  recettesList!: Recette[];
  filteredItems!:Recette[];
  searchText:String = "";
  
  constructor(private router:Router, private recettesService:RecettesService) { }

  ngOnInit() {
    this.recettesService.getRecettes().subscribe(res=>{
      console.log(res);
      this.recettesList = res.recettes
      this.filteredItems = res.recettes
    },
    err =>{
      console.log("error")
    }
  );
  }  
  onLoadRecette(recette:{name:String, hint: String, preparation : String [], image:String}){
    
    let navigationExtras: NavigationExtras = {
      state:{
        recette:recette
        
      }
    };

    this.router.navigate(['/detail-recette'],navigationExtras);
  }
  filterItems() {
    this.filteredItems = this.recettesList.filter(recette=>
      recette.name.toLowerCase().includes(this.searchText.toLowerCase())
      
    );
    console.log(this.filteredItems)
  }
}

