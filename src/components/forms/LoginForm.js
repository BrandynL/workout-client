import React, { useState, useContext } from 'react';
import Box from '@material-ui/core/Box';
import { TextField, Button } from '@material-ui/core';
import { api } from '../../config';
import { UserContext } from '../../context/UserContext/UserContext';
import AuthTokenHelperService from '../../helperServices/AuthTokenHelperService';

const LoginForm = () => {
	const [credentials, setcredentials] = useState({
		email: '',
		password: '',
	});

	const tokenHelper = new AuthTokenHelperService();

	const { setuser } = useContext(UserContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const request = await fetch(api.v1.base + api.v1.endpoints.user_auth, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/Json',
			},
			body: JSON.stringify(credentials),
		});
		const response = await request.json();
		if (!response.errors && response.token) {
			tokenHelper.setToken(response.token);
			setuser(response);
		} else {
			// todo : handle error display
			console.log(response);
		}
	};

	const handleUpdateCredentials = (e) => {
		setcredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<Box>
			<form onSubmit={handleSubmit} noValidate autoComplete='off'>
				<TextField
					error={false}
					id='outlined-full-width'
					margin='normal'
					label='Email Address'
					fullWidth
					variant='outlined'
					name='email'
					onChange={handleUpdateCredentials}
				/>
				<TextField
					type='password'
					margin='normal'
					id='outlined-full-width'
					label='Password'
					fullWidth
					variant='outlined'
					name='password'
					onChange={handleUpdateCredentials}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					color='primary'
					size='large'
				>
					Login
				</Button>
			</form>
		</Box>
	);
};

export default LoginForm;
