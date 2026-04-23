import Termek from "./Termek.js";


export default class Termekek{
    #lista
    constructor(lista,szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.megjelenit()
    }
    megjelenit(){
        this.#lista.forEach(element => {
            this.szuloElem.innerHTML="";
            new Termek(element,this.szuloElem)
        });
    }
}