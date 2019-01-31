import {Espaconave, NaveContainer} from './ships/base-ships'
import {MilleniumFalcon} from './ships/starfighters'

import * as _ from 'lodash'
console.log(_.pad("Exemplos TypeScript", 40, "="))

let nave = new Espaconave('hyperdrive')
nave.pularNoHiperespaco()

let falcon = new MilleniumFalcon()
falcon.pularNoHiperespaco()

let boaParaTrabalho = ( nave: NaveContainer ) => nave.cargoContainers > 2

console.log(`A Falcon e boa para o trabalho? ${boaParaTrabalho ( falcon ) ? 'sim' : 'nao'}`)
