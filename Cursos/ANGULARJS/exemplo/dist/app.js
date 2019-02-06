"use strict";
exports.__esModule = true;
var base_ships_1 = require("./ships/base-ships");
var starfighters_1 = require("./ships/starfighters");
var nave = new base_ships_1.Espaconave('hyperdrive');
nave.pularNoHiperespaco();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.pularNoHiperespaco();
