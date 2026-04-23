import Felhasznalo from "./Felhasznalo.js"
export default class Felhasznalok {
    #lista=[]
        constructor(lista,szuloElem){
            this.#lista=lista
            this.szuloElem=szuloElem
            this.megjelenit()
        }
        megjelenit(){
            this.szuloElem.innerHTML="";
            this.#lista.forEach(element => {
                new Felhasznalo(element,this.szuloElem)
            });
        }
}
