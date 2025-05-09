
export type SizeRange = {
  name: string,
  min: number,
  max: number
}

export const sizes: SizeRange[] = [
  { name: "tiny", min: 0.1 , max: 2 },
  { name: "small", min: 2.1 , max: 9.9 },
  { name: "medium", min: 10, max: 35.9 },
  { name: "large", min: 36, max: 75.9 },
  { name: "huge", min: 75, max: Infinity },
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