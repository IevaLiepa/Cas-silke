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
            return 'ijungto varyklio dar karta uzkurti neimanoma';
        }
        this.isEngineOn = true;
        return 'Variklis ijungtas';
    };

    isjungtiVarikli() {
        if (this.isEngineOn === false) {
            return 'Nori uzgesinti jau uzgesinta varikli?';
        }
        if (parseFloat(this.speed) !== 0) {
            return 'Privalai pilnai sustoti jei nori isjungti varikli!';
        }
        this.isEngineOn = false;
        return 'Variklis isjungtas';
    };

    pradetiVaziuoti() {
        if (this.isEngineOn === false) {
            return 'Pirmiausia ijunk varikli!';
        }
        if (parseFloat(this.speed) !== 0) {
            return 'Automobilis jau pajudejas';
        }
        if (parseFloat(this.fuelLeft) < 2 * parseFloat(this.avgFuelConsumption)) {
            return 'Reikia uzsipilti kuro';
        }
        this.speed = '10km/h';
        this.fuelLeft = `${(parseFloat(this.fuelLeft) - (2 * parseFloat(this.avgFuelConsumption))).toFixed(2)}ltr`;
        return 'Po biski judam';
    };

    vaziuoti() {
        if (parseFloat(this.speed) === 0) {
            return 'Pirmiausia reikia ijungti pavara';
        }
        if (parseFloat(this.fuelLeft) < parseFloat(this.avgFuelConsumption)) {
            return 'nebeuztenka kuro';
        }
        this.fuelLeft = `${(parseFloat(this.fuelLeft) - parseFloat(this.avgFuelConsumption)).toFixed(2)}ltr`;
        return 'Vaziuojam';
    };

    sustoti() {
        if (parseFloat(this.speed) === 0) {
            return 'Silke jau stovi vietoje!';
        }
        this.speed = '0km/h';
        return 'Automobilis sustojo';
    };

    kiekLikoKuro() {
        return this.fuelLeft;
    };

