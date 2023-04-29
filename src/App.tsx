import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";
import Main from "./components/Main";
import {Container, Typography} from "@mui/material";
import Header from "./components/Header";


const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Загрузка...</div>
    }

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm/>


            </div>
        );
    }

    return (
        <div>
            <Header/>
            <Container maxWidth="lg" sx={{ margin: '0, auto' }}>
                <Main/>
            </Container>
            <div>
                <button style={{ marginTop:'500px' ,border:"none", backgroundColor:'transparent'}} onClick={getUsers}>Получить пользователей</button>
                {users.map(user =>
                    <div key={user.email}>{user.email}</div>
                )}
            </div>

        </div>
    );
};

export default observer(App);
