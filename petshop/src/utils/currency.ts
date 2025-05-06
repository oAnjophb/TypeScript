
export function formattedCurrency(value: number): string {
    
    return value.toLocaleString(
        'pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
}
