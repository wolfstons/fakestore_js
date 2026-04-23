export default class Felhsznalo {
constructor(obj, szuloElem) {
        this.obj = obj;
        this.szuloElem = szuloElem;
        this.megjelenit()
    }

    megjelenit() {

        let kod= `<div class="card"><h3>${this.obj.title}</h3>
            <img src="${this.obj.image}" alt="${this.obj.title}">
            <p>${this.obj.description}</p>
            <button class="ar">${this.obj.price} FT</button></div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

}