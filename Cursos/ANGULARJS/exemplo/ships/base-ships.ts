class Espaconave {
    
    constructor (public propulsor: string){}

    pularNoHiperespaco(){
        console.log(`Entrando no hiperespaco com ${this.propulsor}`)
    }

}

interface NaveContainer {
    cargoContainers: number
}

export {Espaconave, NaveContainer}
