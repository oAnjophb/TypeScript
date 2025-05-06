import { Animal, Especies } from "./animal";

export class Dog extends Animal {
    
    constructor(name: string, age: number) {
    super(name, age, Especies.dog)
    }

    loud(): string {
        return 'O cachorro late para estranhos'
    }
}
