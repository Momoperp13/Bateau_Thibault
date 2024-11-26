export class Produit{
    name:String;
    prix:number;
    image!:String;

    constructor(name:String,prix:number){
        this.name = name;
        this.prix = prix;
    }

}