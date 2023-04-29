export interface HistoryCurrencyResponse {
    data: {
        [date: string]: {
            ILS: number;
        };
    };
}