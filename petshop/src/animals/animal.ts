export enum Especies {
  cat = "gato",
  dog = "cachorro",
  wolf = "lobo",
}

export abstract class Animal {
  
  constructor(
    public readonly pet_name: string,
    protected age: number,
    public readonly especies: Especies
  ) {}

  abstract loud(): string;

  showInfo(): void {
    console.log(`Nome: ${this.pet_name}\nIdade: ${this.age}\nEspecie: ${this.especies}`)
  }
}
