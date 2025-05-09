import { Animal } from "./animal";

export class Bird extends Animal {

  public static greed = 'Pássaro'
  
  constructor(name: string, size: number, temperament: string){
    super(name, Bird.greed, size, temperament)
  }
}
