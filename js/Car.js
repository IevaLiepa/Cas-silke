export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.name = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.avgFuelConsumption = vidutinesKuroSanaudos;
        this.isEngineOn = false;
        this.speed = '0km/h';
        this.fuelLeft = kuroBakoTalpa;
    };

    ijungtiVarikli() {
        if (this.isEngineOn === true) {
            return 'ijungto varyklio dar karta ijungti negalima, sugadinsi starteri .💥';
        }
        this.isEngineOn = true;
        return 'Variklis ijungtas';
    };

    isjungtiVarikli() {
        if (this.isEngineOn === false) {
            return 'isjungto varyklio isjungti negalima...🤔';
        }
        if (parseFloat(this.speed) !== 0) {
            return 'Variklis negali buti isjungtas jei automobilis nestovi vietoje!!';
        }
        this.isEngineOn = false;
        return 'Variklis isjungtas';
    };

    pradetiVaziuoti() {
        if (this.isEngineOn === false) {
            return 'Negalima pradeti vaziuoti kol variklis neijungtas';
        }
        if (parseFloat(this.speed) !== 0) {
            return 'Automobilis jau pajudejes';
        }
        if (parseFloat(this.fuelLeft) < 2 * parseFloat(this.avgFuelConsumption)) {
            return 'neuztenka kuro pradeti vaziuoti';
        }
        this.speed = '10km/h';
        this.fuelLeft = `${(parseFloat(this.fuelLeft) - (2 * parseFloat(this.avgFuelConsumption))).toFixed(2)}ltr`;
        return 'Pajudejom is vietos!';
    };

    vaziuoti() {
        if (parseFloat(this.speed) === 0) {
            return 'Pirmiausia reikia pajudeti is vietos';
        }
        if (parseFloat(this.fuelLeft) < parseFloat(this.avgFuelConsumption)) {
            return 'nebeuztenka kuro';
        }
        this.fuelLeft = `${(parseFloat(this.fuelLeft) - parseFloat(this.avgFuelConsumption)).toFixed(2)}ltr`;
        return 'Vaziuojam';
    };

    sustoti() {
        if (parseFloat(this.speed) === 0) {
            return 'Automobilis jau stovi vietoje!';
        }
        this.speed = '0km/h';
        return 'Automobilis sustojo';
    };

    kiekLikoKuro() {
        return this.fuelLeft;
    };

    uzpiltiKuro(a = 0) {
        if (parseFloat(this.speed) !== 0) {
            return 'Negalima uzsipilti kuro vaziuojant';
        }
        if (this.isEngineOn === true) {
            return 'Negalima pilti kuro esant ijungtam varikliui';
        }
        const kiekKuroTelpa = `${(parseFloat(this.fuelTankCapacity) - parseFloat(this.fuelLeft)).toFixed(2)}ltr`;
        if (kiekKuroTelpa === '0.00ltr') {
            return 'Kuro bakas pilnas';
        }
        if (a > parseFloat(kiekKuroTelpa)) {
            return `Galima uzpilti nedaugiau kaip ${kiekKuroTelpa}`;
        }
        if (`${a}` === 'NaN') {
            return 'Ivestas neatpazintas kuro kiekis';
        }
        if (a === 0) {
            return `Kuro neipilta`;
        }
        if (a < 0) {
            return 'Pavojus!! Kvepia nelegalia veikla!! Si funkcija skirta ipilti kuro, o ne issiurbti!';
        }
        this.fuelLeft = `${(a + parseFloat(this.fuelLeft)).toFixed(2)}ltr`;
        return `Ipilta kuro: ${a.toFixed(2)}ltr`;
    };
}