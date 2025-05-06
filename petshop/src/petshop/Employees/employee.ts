export enum Position  {
    "Recepcionista",
    "Veterinário"
}

export class Employe {
    constructor(
        public readonly name: string,
        protected id: number,
        protected position: Position
    ){}
}