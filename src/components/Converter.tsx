import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Box, FormControl,InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {flagsImg} from "../utils/constans";

const symbols: Record<string, string>  = {
    "AUD": "Australian Dollar",
    "AED": "United Arab Emirates Dirham",
    "ARS": "Argentine Peso",
    "BRL": "Brazilian Real",
    "CAD": "Canadian Dollar",
    "COP": "Colombian Peso",
    "EGP": "Egyptian Pound",
    "EUR": "Euro",
    "GBP": "British Pound Sterling",
    "ILS": "Israeli New Sheqel",
    "INR": "Indian Rupee",
    "IRR": "Iranian Rial",
    "JPY": "Japanese Yen",
    "KRW": "South Korean Won",
    "MYR": "Malaysian Ringgit",
    "NOK": "Norwegian Krone",
    "PHP": "Philippine Peso",
    "PLN": "Polish Zloty",
    "SEK": "Swedish Krona",
    "TRY": "Turkish Lira",
    "UAH": "Ukrainian Hryvnia",
    "USD": "United States Dollar",
}



type SymbolType = {
    [key: string]: string;
}
const Converter = () => {
    const {store} = useContext(Context);
    const [price, setPrice] = useState<number>(1000)
    const [to, setTo] = useState<string>('ILS')
    const [from, setFrom] = useState<string>('USD')

    const renderValue = (symbol:string) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={flagsImg[symbol].img} style={{ width: 16, height: 16, marginRight: 5 }} />
            <div>{symbols[symbol]}</div>
        </div>
    );


    return (
        <>
        <Box sx={{display: "flex", marginBottom: '15px', marginTop: '30px'}}>
            <TextField
                label="From"
                type="number"
                value={price}
                sx={{marginRight: '15px'}}
                onBlur={() => store.currency(from, price, to)}
                onChange={e => setPrice(+e.target.value)}
                InputLabelProps={{
                    shrink: true,
                    placeholder: 'Enter a number',
                }}
            />
            <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                    labelId="price"
                    value={from}
                    label="Currency"
                    onChange={e => setFrom(e.target.value)}
                    renderValue={e =>renderValue(from)}
                >
                    {Object.keys(symbols).map((key, index) => (
                        <MenuItem key={index} value={key}>
                            {flagsImg[key as keyof typeof symbols].name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </Box>
            <Box sx={{display: "flex"}}>
                <TextField
                    label="To"
                    type="number"
                    value={store.isPrice}
                    sx={{marginRight: '15px'}}
                    InputLabelProps={{
                        shrink: true,
                        placeholder: 'Enter a number',
                    }}
                />
                <FormControl fullWidth>
                    <InputLabel>Currency</InputLabel>
                    <Select
                        labelId="price"
                        value={to}
                        label="Currency"
                        onChange={e => setTo(e.target.value)}
                        renderValue={e =>renderValue(to)}
                    >
                        {Object.keys(symbols).map((key, index) => (
                            <MenuItem key={index} value={key}>
                                {flagsImg[key as keyof typeof symbols].name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

        </>
    );
};

export default Converter;