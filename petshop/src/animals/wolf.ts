import { Animal, Especies } from "./animal";

export class Wolf extends Animal {
    
    constructor(name: string, age: number) {
    super(name, age, Especies.wolf)
    }

    loud(): string {
        return 'O lobo uiva uiva para a lua cheia'
    }
}
