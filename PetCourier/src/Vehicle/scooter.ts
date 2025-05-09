import { Vehicle } from "./vehicle";

export class Scooter extends Vehicle {
  constructor(vehicleType: string, capacity: number) {
    super(vehicleType, capacity)
  }
}