import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import StocksService from "../services/StocksService";
import {IData} from "../models/IData";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    isPrice = 0;

    dataM = {} as IData;

    constructor() {
        makeAutoObservable(this);
        this.dataM ={
            "data": {
                "2022-04-20": {
                    "ILS": 3.21933
                },
                "2022-04-21": {
                    "ILS": 3.24327
                },
                "2022-04-22": {
                    "ILS": 3.26885
                },
                "2022-04-23": {
                    "ILS": 3.26886
                },
                "2022-04-24": {
                    "ILS": 3.26901
                },
                "2022-04-25": {
                    "ILS": 3.29481
                },
                "2022-04-26": {
                    "ILS": 3.29344
                },
                "2022-04-27": {
                    "ILS": 3.31905
                },
                "2022-04-28": {
                    "ILS": 3.32853
                }
            }};
    }

    setData(data: IData){
        this.dataM = data;
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }
    setPrice(price:number){
        this.isPrice = price;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            // console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (message) {
            console.log(message);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            // console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        }  catch (message) {
            console.log(message);
        }
    }
    async currency(from: string,amount: number, to: string) {
        try {
            const response = await StocksService.currency(from,amount, to);
            // console.log(response)
            // localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            // this.setUser(response.data.user);
            this.setPrice(+response.data.result);
            console.log(+response.data.result)
        }  catch (message) {
            console.log(message);
        }
    }
    async historical(from: string, to: string, dateFrom: string, dateTo: string ) {
        try {
            const response = await StocksService.historical(from, to,dateFrom,dateTo);
            // console.log(response)
            // localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            // this.setUser(response.data.user);
            this.setData(response.data);
            console.log(response)
            console.log("this:"+ JSON.stringify(this.dataM.data))
        }  catch (message) {
            console.log(message);
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        }  catch (message) {
            console.log(message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (message) {
            console.log(message);
        }finally {
            this.setLoading(false);
        }
    }
}
