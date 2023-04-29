import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {flagsImg} from "../utils/constans";


function createData(
    img: string,
    symbol: string,
    price: number,
) {
    return {  img, symbol, price };
}


const rows = [
    createData( flagsImg["EUR"].img, "EUR", 0.91),
    createData( flagsImg["GBP"].img, "GBP", 0.80),
    createData( flagsImg["CAD"].img,"CAD", 1.36),
    createData( flagsImg["ILS"].img, "ILS", 3.42),
        createData( flagsImg["AED"].img, "AED", 3.67),
    createData( flagsImg["JPY"].img, "JPY", 134.05),

];

const RightPart = () => {
    return (
        <TableContainer component={Paper} sx={{ width: '30%'}}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{backgroundColor: "#1d3e67"}}>
                        <TableCell align="left" colSpan={3} sx={{color: "white"}}>
                            Today's rates
                        </TableCell>
                        <TableCell align="right" sx={{color: "white"}}>1USD=</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{margin: "0 auto"}}>
                    {rows.map((row) => (
                        <TableRow
                            key={row.symbol}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={row.img} alt={row.symbol} />
                            </TableCell>

                            <TableCell align="left">{row.symbol}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RightPart;