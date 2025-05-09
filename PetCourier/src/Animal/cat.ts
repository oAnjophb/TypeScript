import { Animal } from "./animal";

export class Cat extends Animal {

  public static greed = 'Gato'

  constructor(name: string, size: number, temperament: string, greed = 'Cat'){
    super(name, Cat.greed, size, temperament)
  }
}
