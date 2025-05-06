import { Animal, Especies } from "./animal";

export class Cat extends Animal {
    
    constructor(pet_name: string, age: number) {
    super(pet_name, age, Especies.cat)
    }

    loud(): string {
        return 'O gato mia pedindo carinho'
    }
}
