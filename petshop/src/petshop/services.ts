
export const Prices: number[] = [
    150.00,
    80.00,
    100.00,
    35.00
]

export enum Services {
    "Banho",
    "Tosa",
    "Desembolo",
    "Corte de Unha"
}

export enum Procedure {
    "Consulta",
    "Vacinação",
    "Retorno pós-cirúrgico",
    "Consulta com exames",
    "Aplicação de medicamento"
}



export function realizedProcedure(value: number): string {
    return Procedure[value]
}

export function ServicesOfPetshop(value: number): string {  
    
    return Services[value]
}