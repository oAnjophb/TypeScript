
export function currentDate(date: Date, showYear: boolean = true): string {
  const locale = new Intl.DateTimeFormat("pt-BR", {
    year: showYear ? "2-digit" : undefined,
    month: "2-digit",
    day: "2-digit",
  });

  return locale.format(date);
}
