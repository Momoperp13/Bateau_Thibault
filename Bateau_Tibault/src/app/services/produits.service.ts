import { Injectable } from '@angular/core';
import { Produit } from '../models/produits';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  produitsList!:Produit[];

  constructor(private http:HttpClient){}

  getProduits(){
    return this.http.get<{produits:Produit[]}>('assets/data/produits.json')
  }
}
