var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.encender = function () {
        console.log("Encendiendo el auto...");
    };
    Auto.prototype.apagar = function () {
        console.log("Apagando el auto...");
    };
    return Auto;
}());
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.encender = function () {
        console.log("Encendiendo la moto...");
    };
    Moto.prototype.apagar = function () {
        console.log("Apagando la moto...");
    };
    return Moto;
}());
var FabricaVehiculos = /** @class */ (function () {
    function FabricaVehiculos() {
    }
    FabricaVehiculos.crearVehiculo = function (tipo) {
        switch (tipo) {
            case "auto":
                return new Auto();
            case "moto":
                return new Moto();
            default:
                return null;
        }
    };
    return FabricaVehiculos;
}());
// Ejemplo de uso
var vehiculo = FabricaVehiculos.crearVehiculo("auto");
if (vehiculo) {
    vehiculo.encender();
    vehiculo.apagar();
}
else {
    console.log("Tipo de vehículo no válido");
}
var moto = FabricaVehiculos.crearVehiculo("moto");
if (moto) {
    moto.encender();
    moto.apagar();
}
else {
    console.log("Tipo de vehículo no válido");
}
