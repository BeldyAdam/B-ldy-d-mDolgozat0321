import { ADATOK } from "./adat.js";
export function tartalomFeltoltes() {
    const TARTALOM = document.querySelector(".tartalom");
    let txt = "";
    ADATOK.forEach(element => {
        txt += `<img src="${element.kep}" alt="${element.nev}">`
        TARTALOM.innerHTML = txt;
    });
}

export function egerRavisz(){
    const kepek = document.querySelectorAll(".tartalom img");
/*     console.log(kepek); */
        /* Képek háttérszine változik, de nem látszik a kép miatt */
    kepek.forEach(element => {
        element.addEventListener("mouseover", kiemelHozzaadas)
        element.addEventListener("mouseleave", kiemelTorles)
    });
    function kiemelHozzaadas(event){
        event.target.classList.add("kiv");  
    }
    
    function kiemelTorles(event){
        event.target.classList.remove("kiv");
    }
}

export function megmutatGombb() {
    const MEGMUTAT = document.querySelector("button");
    const KIVALASZTOTT = document.querySelector(".kivalasztott");
    let txt = "";
    MEGMUTAT.addEventListener("click", function() {
        let random = Math.floor(Math.random() * ADATOK.length);
        txt += `<li>${ADATOK[random].nev}</li>
                <li>${ADATOK[random].tipus}</li>`;
        KIVALASZTOTT.innerHTML = txt;
    })
}

export function betoltve(event){
    const LISTA = document.querySelectorAll(".kivalasztott li");
    const kepek = document.querySelectorAll(".tartalom img");
    let volt = "Volt";
    let nem = "Nem volt";
    kepek.forEach(element => {
        element.addEventListener("mouseover", szovegHozzaad)
        element.addEventListener("mouseleave", szovegElvesz)
    });
    function szovegHozzaad(event){
        if (LISTA.includes(ADATOK.nev)) {
            LISTA[event].innerHTML += `<li>${volt}</li>`;
        }else{
            LISTA[event].innerHTML += `<li>${nem}</li>`;
        }
    }
    function szovegElvesz(event){
        console.log("nem volt");
    }
}