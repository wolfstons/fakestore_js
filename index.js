import Services from "./Services.js";
import Termekek from "./Termekek.js";
import Felhasznalok from "./Felhasznalok.js";

const taroloElem = document.querySelector(".tartalom");
const termekElem = document.querySelector("#termekek");
const felhElem = document.querySelector("#felh");
console.log(felhElem);
let lista = [];
let felhAdatok = [];
const services = new Services();
termekElem.addEventListener("click", () => {
  services.getadat("https://fakestoreapi.com/products", termekMegjelenitese);
});

function termekMegjelenitese(data) {
  lista = data;
  new Termekek(lista, taroloElem);
}

felhElem.addEventListener("click", () => {
  services.getadat("https://fakestoreapi.com/users", felhMegjelenitese);
});
function felhMegjelenitese(data) {
  felhAdatok=data;
  new Felhasznalok(felhAdatok, taroloElem);
}
