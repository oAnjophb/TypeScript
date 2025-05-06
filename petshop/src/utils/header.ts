
import { alignLine, alignText } from "./textFormated"

export function headerHistory(): void {
    console.log(alignText('HÍSTORICO DO PET', ['>27']))
    console.log(alignText('Acompanhe os cuidados do seu pet', ['>36']))
    console.log(alignLine('=', [40]))
}

export function headerPetshop(nameOfPetshop: string): void {
    console.log(alignText(nameOfPetshop,['>24', '<16']))
    console.log(alignText('A segunda família do seu pet', ['39']))
    console.log(alignLine('-',[39]))
}