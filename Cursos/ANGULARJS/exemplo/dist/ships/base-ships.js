"use strict";
exports.__esModule = true;
var Espaconave = /** @class */ (function () {
    function Espaconave(propulsor) {
        this.propulsor = propulsor;
    }
    Espaconave.prototype.pularNoHiperespaco = function () {
        console.log("Entrando no hiperespaco com " + this.propulsor);
    };
    return Espaconave;
}());
exports.Espaconave = Espaconave;
