import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from "../context/AppContext";
import useInitialState from '../hooks/useInitialState';
import '../styles/global.scss';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/Login" element={<Login/>}/>
                            <Route path="/password-recovery" element={<PasswordRecovery/>}/>
                            <Route path="/send-email" element={<SendEmail/>}/>
                            <Route path="/new-password" element={<NewPassword/>}/>
                            <Route path="/account" element={<MyAccount/>}/>
                            <Route path="/singup" element={<CreateAccount/>}/>
                            <Route path="/checkout" element={<Checkout/>}/>
                            <Route path="/orders" element={<Orders/>}/>
                            <Route path="*" element={<NotFound />}/> {/* Se debe colocar siempre NotFound cómo valor por defecto */}
                        </Routes>
                    </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;

