import { Animal } from "src/animals/animal";
import { Employe, Position } from "./employee";
import { realizedProcedure } from "../services";
import { headerPetshop } from "src/utils/header";
import { PetShop } from "../petshop";
import { alignLine, alignText } from "src/utils/textFormated";
import { currentDate } from "src/utils/date";


export class Veterinarian extends Employe {

    private cares: string[] = []

    constructor(name: string, id: number) {
        super(name, id, Position.Veterinário)
    }

    realizeCare(animal: Animal, hour: string, value: number): void {
        const care = `${animal.pet_name}|${animal.especies}|${hour}|${realizedProcedure(value)}`
        
        this.cares.push(care)
    }

    showReport(): void {
        const now = new Date()
        const actualDate = currentDate(now)


        console.log(alignText(PetShop.name,['>26', '<16']))
        console.log(alignText('A segunda família do seu pet', ['46']))
        console.log(alignLine('-',[46]))

        console.log(`RELATÓRIO DIÁRIO DE CONSULTAS - ${actualDate}`)
        console.log(`Veterinário responsável: ${this.name}`)
        console.log(alignLine('-',[46]))
        console.log(alignText('NOME DO PET|ESPÉCIE|HORÁRIO|PROCEDIMENTO', ['<11', '<8', '<7', '<20']))
        console.log(alignLine('-',[46]))

        for (const care of this.cares) {
            console.log(alignText(care, ['<11', '<8', '<7', '<20']))
        }
        
        console.log(alignLine('-',[46]))
        console.log(`TOTAL DE ATENDIMENTOS: ${this.cares.length}`)
        console.log(alignLine('=',[46]))
    }        
}