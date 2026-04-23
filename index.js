import Services from "./Services.js";
import Termekek from "./Termekek.js";

const taroloElem = document.querySelector(".tartalom");
const termekElem = document.querySelector("#termekek");
const felhElem = document.querySelector("#felh");
console.log(felhElem);
let lista = [];
let usersList = [];
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
function felhMegjelenitese(felhAdatok) {
  usersList = felhAdatok;
  new felhasznalok(felhAdatok, taroloElem);
}
