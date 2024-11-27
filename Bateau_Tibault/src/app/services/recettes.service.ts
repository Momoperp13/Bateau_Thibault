import { Injectable } from '@angular/core';
import { Recette } from '../models/recettes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  recettesList!:Recette[];

  constructor(private http:HttpClient){}

  getRecettes(){
    return this.http.get<{recettes:Recette[]}>('assets/data/recettes.json')
  }
}
