import { Vehicle } from "./vehicle";

export class Van extends Vehicle {
  constructor(vehicleType: string, capacity: number) {
    super(vehicleType, capacity)
  }
}