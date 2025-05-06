import { Animal } from "src/animals/animal"
import { Prices, ServicesOfPetshop } from "../services"
import { headerHistory } from "src/utils/header"
import { alignLine, alignText } from "src/utils/textFormated"
import { formattedCurrency } from "src/utils/currency"


type ServiceRecord = {
    service: string
    value: number
    date: string
}


export class PetAccount {

    private history: ServiceRecord[] = []

    private constructor(private tutor_name: string, private pet: Animal, private register_date: string) {
    }

    static createAccount(tutor_name: string, pet: Animal, register_date: string): PetAccount {
        return new PetAccount(tutor_name, pet, register_date)
    }

    realizeService(value: number, date: string): void {

        const service = ServicesOfPetshop(value)
        this.history.push({service, value, date})
    }

    showHistory(): void {
        headerHistory()
        
        console.log(alignText(`NOME: ${this.pet.pet_name}|RESPONSÁVEL: ${this.tutor_name}`, ['<11', '<13']))
        console.log(alignLine('=', [40]))
        console.log(alignText('DATA|SERVIÇO|VALOR', ['<11', '<13', '>10']));
        console.log(alignLine('-', [40]))


        let totalPrice = 0
        let count = 0
        const currencySymbol = alignText('R$', ['<4'])

        for (const record of this.history) {
            const line = `${record.date}|${record.service}|${currencySymbol} ${formattedCurrency(Prices[record.value])}`

            console.log(alignText(line, ['<11', '<13', '>10']))
            totalPrice += Prices[record.value]
            count += 1
        }
        console.log(alignLine('-', [40]))
        console.log(alignText(`TOTA DE SESSÕES: ${count}|${currencySymbol}${formattedCurrency(totalPrice)}`, ['<27', '1']))
        console.log(alignLine('-', [40]))
    }
}