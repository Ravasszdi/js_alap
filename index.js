import { adatLista } from "./adat.js";
import { feladat1,feladat2, feladat3 } from "./fuggvenyek.js";

let ertekElem = document.getElementById("ertekeles");
let gombElem = document.getElementById("gomb");
let szovegElem = document.getElementById("eredmeny");
let szamokElem = document.getElementById("szamok");
let tablazatElem = document.getElementById("tablazat");
gombElem.addEventListener("click", function () {
  feladat1(ertekElem, szovegElem);
});

feladat2(szamokElem,12)
feladat3(tablazatElem, adatLista);

