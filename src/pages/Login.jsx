import React, {useRef} from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	const form =useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault(); //Con esto evitamos que se recargue el navegador y se vean los datos en la url.
		const formData = new FormData(form.current);//Con esto almacenamos la info enviada por el submit.
		const data = { //Esto nos permite ver la información del formData, que luego será enviado al backend.
			usename: formData.get('email'),//Acá usame la propiedad de name NO de id.
			password: formData.get('password'),
		}
		console.log(data)
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" /> 
				<form action="/" className="form" ref={form}> {/*Esto es para usar el useRef */}
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" id="email" name="email" placeholder="platzi@example.cm" className="input input-email" />
					
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" name="password" placeholder="*********" className="input input-password" />
					
					<button 
						className="primary-button login-button" 
						onClick={handleSubmit}>
						Log in
					</button>

					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div>
	);
}

export default Login;