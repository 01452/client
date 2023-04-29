import $api from "../http";
import {AxiosResponse} from 'axios';
import {LatestCurrencyResponse} from "../models/response/LatestCurrencyResponse";
import {HistoryCurrencyResponse} from "../models/response/HistoryCurrencyResponse";

export default class StocksService {
    static async currency(from: string, amount: number, to: string): Promise<AxiosResponse<LatestCurrencyResponse>> {
        return $api.post<LatestCurrencyResponse>('/latest', {from, to, amount})
    }

    static async historical(from: string, to: string, dateFrom: string, dateTo: string): Promise<AxiosResponse<HistoryCurrencyResponse>> {
        return $api.post<HistoryCurrencyResponse>('/historical', {from, to, dateFrom, dateTo})
    }


}

