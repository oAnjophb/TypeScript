
export abstract class Vehicle {
  public readonly vehicleType: string
  public readonly capacity: number

  constructor(vehicleType: string, capacity: number) {
    this.vehicleType = vehicleType
    this.capacity = capacity
  }
}