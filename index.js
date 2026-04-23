import Services from "./Services.js";
import Termekek from "./Termekek.js";

const taroloElem = document.querySelector(".tartalom");
const termekElem = document.querySelector("#termekek");
const felhElem = document.querySelector("#felh");

let lista = [];
termekElem.addEventListener("click", () => {
  const services = new Services();
  services.getadat("https://fakestoreapi.com/products", termekMegjelenitese);

  function termekMegjelenitese(data) {
    lista = data;
    new Termekek(lista, taroloElem);
  }
});

felhElem.addEventListener("click", () => {
  let usersList = [];
  services.getadat("https://fakestoreapi.com/users", felhMegjelenitese);

  function felhMegjelenitese(felhAdatok) {
    usersList = felhAdatok;
    new Termekek(usersList, taroloElem);
  }
});
