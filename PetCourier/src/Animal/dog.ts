import { Animal } from "./animal";

export class Dog extends Animal {

  public static greed = 'Cachorro'

  constructor(name: string, size: number, temperament: string, greed = 'Dog'){
    super(name, Dog.greed, size, temperament)
  }
}
