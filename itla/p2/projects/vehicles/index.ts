interface Vehiculo {
  encender(): void;
  apagar(): void;
}

class Auto implements Vehiculo {
  encender(): void {
    console.log("Encendiendo el auto...");
  }

  apagar(): void {
    console.log("Apagando el auto...");
  }
}

class Moto implements Vehiculo {
  encender(): void {
    console.log("Encendiendo la moto...");
  }

  apagar(): void {
    console.log("Apagando la moto...");
  }
}

class FabricaVehiculos {
  static crearVehiculo(tipo: string): Vehiculo | null {
    switch (tipo) {
      case "auto":
        return new Auto();
      case "moto":
        return new Moto();
      default:
        return null;
    }
  }
}

// Ejemplo de uso
const vehiculo = FabricaVehiculos.crearVehiculo("auto");
if (vehiculo) {
  vehiculo.encender();
  vehiculo.apagar();
} else {
  console.log("Tipo de vehículo no válido");
}

const moto = FabricaVehiculos.crearVehiculo("moto");
if (moto) {
  moto.encender();
  moto.apagar();
} else {
  console.log("Tipo de vehículo no válido");
}



