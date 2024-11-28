export class Produit{
    id:number
    name:String;
    prix:number;
    image!:String;

    constructor(id:number, name:String,prix:number){
        this.id = id;
        this.name = name;
        this.prix = prix;
    }

}