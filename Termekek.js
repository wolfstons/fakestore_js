import Termek from "./Termek.js";


export default class Termekek{
    #lista
    constructor(lista,szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.megjelenit()
    }
    megjelenit(){
        this.szuloElem.innerHTML="";
        this.#lista.forEach(element => {
            
            new Termek(element,this.szuloElem)
        });
    }
}