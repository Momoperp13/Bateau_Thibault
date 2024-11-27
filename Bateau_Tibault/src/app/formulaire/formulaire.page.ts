import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput,IonSelect,IonSelectOption,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
  standalone: true,
  imports: [FormsModule,IonInput,IonSelect,IonSelectOption,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle]
})
export class FormulairePage implements OnInit {
  formulaire ={
    nom:'',
    numero:'',
    rue:'',
    ville: '',
    code_postale:75000,
    pays: 'France'
  }

  constructor( private router: Router) { }
  ngOnInit() {
    
    
  }
  onSubmit(formulaire:{nom:String, numero: String, rue:String, ville:String, code_postale:number, pays:String}) {
    console.log('Données de l\'adresse soumises :', formulaire);
    let navigationExtras: NavigationExtras = {
      state:{
        formulaire:formulaire   
      }
      
    }
    console.log(formulaire);
    this.router.navigate(['/commande'],navigationExtras);
  }
  onGoToAchat(){
    this.router.navigate(['/detail-produit'])
  }

}
