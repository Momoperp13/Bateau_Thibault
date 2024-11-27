import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput,IonSelect,IonSelectOption,IonButtons, IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon,IonLabel,IonButton,IonImg,IonGrid,IonItem,IonRow, IonCol,IonList,IonText,IonCard,IonCardHeader,IonCardTitle } from '@ionic/angular/standalone';
import { Router,ActivatedRoute } from '@angular/router';

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
    rue:'',
    ville: '',
    code_postale:'75000',
    pays: 'France'
  }

  constructor(private route:ActivatedRoute, private router: Router) { }
  ngOnInit() {
    
    
  }
  onSubmit() {
    console.log('Données de l\'adresse soumises :', this.formulaire);
  }
  onGoToAchat(){
    this.router.navigate(['/detail-produit'])
  }

}
