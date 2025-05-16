
export type autonomy = {
  name: string,
  qty_fuel: number
}

export const distances: autonomy[] = [
  { name: "very near", qty_fuel: 50 },
  { name: "near", qty_fuel: 75 },
  { name> }
]

export class Animal {
  public readonly name: string
  public readonly size: number
  public readonly temperament: string
  public readonly greed: string

  constructor(name: string, greed: string, size: number, temperament: string) {
    this.name = name
    this.size = size
    this.temperament = temperament
    this.greed = greed
  }

  public getSizeCategory(): string {
    const sizeCategory = sizes.find(size => this.size >= size.min && this.size < size.max);
    return sizeCategory ? sizeCategory.name : "Unknown size";
  }
} 