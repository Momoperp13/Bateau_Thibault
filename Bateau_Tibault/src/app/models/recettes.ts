export class Recette{
    name:String;
    hint!:String;
    preparation!:String[];
    image!:String;

    constructor(name:String){
        this.name = name;
    }

}