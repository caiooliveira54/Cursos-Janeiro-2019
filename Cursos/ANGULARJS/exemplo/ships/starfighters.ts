import { Espaconave, NaveContainer } from "./base-ships";

export class MilleniumFalcon extends Espaconave implements NaveContainer {

    cargoContainers: number

    constructor(){
        super('hyperdrive'),
        this.cargoContainers
    }

    pularNoHiperespaco(){
        if (Math.random() >= 0.5) { super.pularNoHiperespaco() }
        else { console.log('Deu ruim') }
    }

}
