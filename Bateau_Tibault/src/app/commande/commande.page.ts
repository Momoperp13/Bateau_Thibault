import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
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
interface Product {
  name: string;
  image: string;
  prix: number;
  quantite: number;
}
@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
  standalone: true,
  imports: [IonContent,
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
    DatePipe
  ]
})
export class CommandePage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  currentDate: Date = new Date();
  livraisonDate:Date = new Date();

  formulaire!:
    {
    nom:String,
    numero:String,
    rue:String,
    ville: String,
    code_postale:number,
    pays: String
    }
  
    products: Product[] = [];// Liste vide qui sera remplie avec les produits du panier
    total: number = 0;
// à la palce de Products on va mettre ce qu'on va recuperer de local storage
ngOnInit() {
  console.log('date:', this.currentDate);

  // Récupérer les paramètres de la route (formulaire et date de livraison)
  this.route.queryParams.subscribe((params) => {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.formulaire = this.router.getCurrentNavigation()?.extras.state?.[
        'formulaire'
      ];
      this.livraisonDate = this.router.getCurrentNavigation()?.extras.state?.[
        'livraisonDate'
      ];
    }
  });

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.products = cart; 
   
    this.products.forEach((product) => {
      this.total += product.prix * product.quantite;
    });

    console.log('Produits récupérés du panier:', this.products);
    console.log('Total:', this.total);
  }
  envoyerCommande() {
   
    localStorage.removeItem('cart');
    
   
    this.router.navigate(['/home']);
  }
}
