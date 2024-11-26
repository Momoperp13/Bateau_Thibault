import { Injectable } from '@angular/core';
import { Bateau } from '../models/bateaux';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BateauService {
  bateauList!:Bateau[];

  constructor(private http:HttpClient) { }
  getBateaux(){
    return this.http.get<{bateau:Bateau[]}>('assets/data/bateaux.json')
  }
}
