function ertekeles(ertek){
    let eredmeny = "";
    switch (ertek) {
        case 1:
            eredmeny = "elégtelen";
            break;
        case 2:
            eredmeny = "elégséges";
            break;
        case 3:
            eredmeny = "közepes";
            break;
        case 4:
            eredmeny = "jó van mááá";
            break;
        case 5:
            eredmeny = "jeles";
            break;
    
        default:
            eredmeny = "Ezt még chatGPT se tudja értékelni"
            break;
    }
    return eredmeny;
}

 export function feladat1(num_fild, text_fild){
    let szam = Number(num_fild.value);
    let szoveg = ertekeles(szam);
    text_fild.innerHTML = `<p>${szoveg}</p>`;
}

function random_int(min, max){
    return Math.floor((Math.random()*(max-min+1))+min);
}

function lista_mk(n){
    let lista = [];
    for(let i = 0; i < n; i++){
        lista[i] = random_int(-10, 100);
    }
    return lista;
}

function lista_format(lista){
    let szoveg = "";
    szoveg += "<ul>"
    for(let i = 0; i < lista.length; i++){
        szoveg += `<li>${lista[i]}</li>`
    }
    szoveg += "</ul>"
    return szoveg
}

export function feladat2(text_fild, n){
    text_fild.innerHTML = lista_format(lista_mk(n));
}

function table_mk(adatLista, bootstrap){
    let tablet = `<table class="${bootstrap}">`;
    tablet += "<tr>";
    tablet += "<td>Név</td>";
    tablet += "<td>Átlag</td>";
    tablet += "</tr>";
    for(let i = 0; i < adatLista.length; i++){
    tablet += `<tr>`;
    tablet += `<td>${adatLista[i].nev}</td>`;
    tablet += `<td>${adatLista[i].atlag}</td>`;
    tablet += `</tr>`;
    }
    return tablet;
}

export function feladat3(tablazatElem,adatLista){
    tablazatElem.innerHTML = table_mk(adatLista, "table table-dark table-hover");
}