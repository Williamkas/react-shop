import React from 'react'
import '../styles/Login.scss';

const Login = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img src="../../public/Logos/logo_yard_sale.svg" alt="logo" className="logo"/>
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your account</p>

                <form action="" className="form">
                    <label for="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="**********" className="input-password"/>
            
                    <label for="re-password" className="label">Re-enter password</label>
                    <input type="password" id="re-password" placeholder="**********" className="input-password"/>
                
                    <input type="submit" className="primary-button login-button" value="Confirm"/>
                </form>

            </div>
        </div>
    )
}

export default Login;