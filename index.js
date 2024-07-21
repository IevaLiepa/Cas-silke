

import { Car } from "./js/Car.js/"


/*
class -> Car(Automobilis)

Savybės:

- pavadinimas(Audi)
- modelis(80)
- spalva
- kuro bako talpa(litrais)
- vidutinės kuro sąnaudos 100km
- ar įjungtas varyklis(default: false)
- greitis(default: 0)

Metodai:

- ijungti varykli
    - ijungto varykli dar karto ijungti negalima, sugadinti starteri
- isjungti varykli
    - isjungto varyklio isjungti negalima...
- pradeti vaziuoti(greitis tiesiog tampa ne nulinis ir sunaudoja 2x litrus kuro sanaudu)
- vaziuoti(naudoja 1x litro kuro sanaudu)
- sustoti(greitis tiesiog tampa nulinis)
- kiek liko kuro ?
- uzpilti kuro baka(kiek litrais)


*/




const Automobilis = new Car('Audi', '80', 'Juoda', '68ltr', '7.4ltr/100km');

console.log(Automobilis);
console.log(Automobilis.ijungtiVarikli());
console.log(Automobilis.pradetiVaziuoti());
console.log(Automobilis.vaziuoti());
console.log(Automobilis.kiekLikoKuro());
console.log(Automobilis.sustoti());
console.log(Automobilis.isjungtiVarikli());
console.log(Automobilis.uzpiltiKuro());
console.log(Automobilis);