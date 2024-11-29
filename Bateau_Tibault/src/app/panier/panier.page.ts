import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonSelect,
  IonSelectOption,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
  IonGrid,
  IonItem,
  IonRow,
  IonCol,
  IonList,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButtons,
  IonThumbnail,
  
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonIcon,
    IonLabel,
    IonButton,
    IonImg,
    IonGrid,
    IonItem,
    IonRow,
    IonCol,
    IonList,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonButtons,
    IonThumbnail,
    NgFor,
    DatePipe,
  ],
})
export class PanierPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentDate: Date = new Date();
  livraisonDate:Date = new Date();
  delai_de_livraison =2;
  pointchoisi={
    nom:'',
    numero:'',
    rue:'',
    ville: '',
    code_postale:75000,
    pays: 'France'
  }
  pointsRelais = [
    { nom: 'La poste', numero:"43", rue: "Rue des Petits Champs", code_postale:75001, ville: "Paris", pays:"France"},
    { nom: 'Relais H', numero:"5", rue: "Rue des Mathurins",code_postale: 75009,ville: "Paris", pays:"France"},
    { nom: 'Relais Pickup', numero:"58", rue:"Rue de l'Arbre Sec",code_postale: 75001, ville:"Paris", pays:"France"},
  ];
  products!: any;
ngOnInit() {
  this.livraisonDate.setDate(this.livraisonDate.getDate()
   + this.delai_de_livraison);
    console.log("date:",this.currentDate) 
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    this.products = JSON.parse(storedCart);
  } else {
    this.products = [];
  }

  console.log('Produits dans le panier:', this.products);
}
onPointRelaisChange(event: any) {
  const selectedPointNom = event.detail.value;
  console.log('Point relais sélectionné :', selectedPointNom);
  this.pointsRelais.forEach(pt=>{if (pt.nom ==selectedPointNom){
    this.pointchoisi =pt;
  }
  });
  console.log('Données de l\'adresse soumises :', this.pointchoisi);
  let navigationExtras: NavigationExtras = {
    state:{
        livraisonDate:this.livraisonDate,
        formulaire:this.pointchoisi   
    }   
  }
    console.log(this.pointchoisi);
    this.router.navigate(['/commande'],navigationExtras);
  
}

onDeleteProduitFromCart(productId: number) {
  this.products = this.products.filter((product:
     any) => 
    product.id !== productId);
  localStorage.setItem('cart', JSON.
    stringify(this.products));
  console.log('Produit supprimé, nouveau panier:',
     this.products);
}
onGoToproduitDetail(product: any) {
  this.router.navigate(['detail-produit'], {
    state: { produit: product }, 
  });
}

  onGoToFormulaire(){
    this.router.navigate(['/formulaire'])
  }
  onGoToProduits(){
    this.router.navigate(['/Produit'])
  }
  
}

