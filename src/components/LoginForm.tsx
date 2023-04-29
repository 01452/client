import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Box, FormControl, InputLabel, MenuItem, Select, TextField, Button} from "@mui/material";
import {flagsImg} from "../utils/constans";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <Box sx={{
            display: "column",
            justifyContent: "center", alignItems: "baseline", marginBottom: '15px',marginTop: '100px'
        }}>
            <Box sx={{display: "flex", marginBottom: '10px',marginRight: '15px', justifyContent: "center", alignItems: "baseline"}}>
                <TextField  style={{
                    margin: '0px 5px'}}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder='Email'

                />
                <TextField style={{
                    margin: '0px 5px'}}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='Password'
                />
            </Box>
            <Box sx={{display: "flex", justifyContent: "center",marginRight: '15px', alignItems: "baseline", marginBottom: '15px'}}>
                <Button style={{
                    backgroundColor: '#3b5998',
                    color: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    padding: '10px 15px',
                    margin: '5px',
                    fontSize: '16px',
                    width: '200px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }} onClick={() => store.registration(email, password)}>Registration</Button>
                <Button style={{
                    backgroundColor: '#3b5998',
                    color: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    padding: '10px 15px',
                    margin: '5px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    width: '200px',
                    transition: 'all 0.3s ease'
                }} onClick={() => store.login(email, password)}>Login</Button>
            </Box>
        </Box>
    );
};

export default observer(LoginForm);
