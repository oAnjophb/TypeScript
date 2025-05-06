
import { alignLine, alignText } from "src/utils/textFormated"
import { Animal } from "../animals/animal"
import { Prices, Services } from "./services"
import { formattedCurrency } from "src/utils/currency"
import { currentDate } from "src/utils/date"
import { headerPetshop } from "src/utils/header"
import { PetAccount } from "./pet/petAccount"


export class PetShop {
    public readonly name: string
    private petsAccounts: PetAccount[]
    
    constructor (name: string) {
        this.name = name
        this.petsAccounts = []
    }

    createPetAccount(tutor_name: string, pet: Animal): PetAccount {

        const now = new Date()
        const actualDate = currentDate(now)

        const petAccount = PetAccount.createAccount(tutor_name, pet, actualDate)
    
        this.petsAccounts.push(petAccount)
    
        return petAccount
    }

    showInfo(): void {
        headerPetshop(this.name)
        console.log(alignText('SERVIÇOS|PREÇOS', ['<15', '>21']))
        console.log(alignLine('-',[39]))
        
        for (let i = 0; i < Object.keys(Services).length / 2; i++) {
            
            const jobs = Services[i]
            const spaces = ' '.repeat(16 - jobs.length)
            const prices = Prices[i]
            const currencySymbol = alignText('R$', ['>15'])

            console.log(jobs + spaces + "|" + currencySymbol + alignText(`${formattedCurrency(prices)}`, ['>7']))
        }

        console.log(alignLine(' ',[39]))
        console.log(alignLine('=',[39]))
        console.log(alignText(this.name, ['>24', '<16']))
        console.log(alignLine('=',[39]))
        
        console.log('\n')
    }
}
