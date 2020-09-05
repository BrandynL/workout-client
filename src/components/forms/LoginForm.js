import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { TextField, Button } from '@material-ui/core';

const LoginForm = () => {
	const [credentials, setcredentials] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(credentials);
	};

	const handleUpdateCredentials = (e) => {
		setcredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<Box>
			<h1>Login</h1>
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
