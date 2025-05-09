import { Vehicle } from "./vehicle";

export class Motocycle extends Vehicle {
  constructor(vehicleType: string, capacity: number) {
    super(vehicleType, capacity)
  }
}