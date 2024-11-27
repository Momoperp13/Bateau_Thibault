import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonButtons,IonIcon,IonInput } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
  standalone: true,
  imports: [IonLabel, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonButton, IonCardTitle, IonCardHeader, IonCardContent,IonButtons,IonIcon, IonInput]
})
export class DetailProduitPage implements OnInit {

  produit!:{
    id:number
    name : String,
    prix : number,
    image:String
  }
  quantite:number=1;
  constructor(private route:ActivatedRoute, private router: Router) { }

  onGoToProduits(){
    this.router.navigate(['/Produit'])
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.produit = this.router.getCurrentNavigation()?.extras.state?.['produit'];
      }
    })
  }
  addQuantite(){
    this.quantite+=1;
  }
  removeQuantite(){
    this.quantite-=1;
  }
  goToFormulaire(){
    this.router.navigate(['/formulaire'])
  }


}
