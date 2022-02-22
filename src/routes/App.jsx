import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/global.scss";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
    return (
        <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/Login" element={<Login />}/>
                        <Route path="recovery-password" element={<RecoveryPassword />}/>
                        <Route path="*" element={<NotFound />}/> {/* Se debe colocar siempre NotFound cómo valor por defecto */}
                    </Routes>
                </Layout>
        </BrowserRouter>
    );
}

export default App;

