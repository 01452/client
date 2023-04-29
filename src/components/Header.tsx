import React, {useContext} from 'react';
import {Typography} from "@mui/material";
import {Context} from "../index";

const Header = () => {
    const {store} = useContext(Context);
    return (
        <>
        <Typography variant="h1" gutterBottom sx={{
            background: '#1d3e67',
            padding: '15px',
            marginBottom: '50px',
            color: '#fff',
            fontWeight: 600,
            fontSize: '50px',
            textAlign: 'center',
            textTransform: 'capitalize',
        }}>
            Your exchange rate application
            <div
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
            }}
        >
                <button onClick={() => store.logout()} style={{
                    backgroundColor: '#3b5998',
                    color: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    padding: '10px 15px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginRight: '20px',
                    marginTop: '10px',
                    fontWeight: 600
                }}>Выйти</button>
        </div>
        </Typography>

        </>
    );
};

export default Header;