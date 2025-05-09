import { Animal } from "src/Animal/animal";
import { randomSelection } from "src/utils/randomSelection";
import { Vehicle } from "src/Vehicle/vehicle";

export class Courier {
  animal: Animal[];
  vehicle: Vehicle[];

  constructor(animal: Animal[], vehicle: Vehicle[]) {
    this.animal = animal;
    this.vehicle = vehicle;
  }

  startCourier(): void {
      for (const _ of this.animal) {
      const selectedVehicle = randomSelection(this.vehicle, 1)[0];
      const selectedAnimal = randomSelection(this.animal, 1)[0];

      const isCapacityEnough = selectedVehicle.capacity >= selectedAnimal.size;
      const isTemperamentGood = selectedAnimal.temperament.toLowerCase() === "dócil";

      const resultOfCourier = isCapacityEnough && isTemperamentGood ? "SUCESSO" : "FRACASSO";

      console.log(`Transportando ${selectedAnimal.name} (${selectedAnimal.greed}, ${selectedAnimal.temperament}, ${selectedAnimal.size})`)
      
      if (resultOfCourier === 'SUCESSO') {
        console.log(`${selectedAnimal.name} foi transporatado(a) com sucesso por um ${selectedVehicle.vehicleType}-${selectedVehicle.capacity} `)
      } else {
        console.log(`${selectedAnimal.name} não pode ser transporatado(a) por um ${selectedVehicle.vehicleType}-${selectedVehicle.capacity}: pois é ${selectedAnimal.temperament} e muito Grande`)
      }
    }
  }
}