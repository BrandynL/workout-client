import React from 'react';
import { Container, Box } from '@material-ui/core';
import LoginForm from '../components/forms/LoginForm';
import { Link } from 'react-router-dom';

export default function LoginScreen() {
	return (
		<Container>
			<Box
				minHeight='100vh'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				maxWidth={600}
				m='auto'
			>
				<h1>Login to your account</h1>
				<LoginForm />
				<Box my={5} textAlign='center'>
					<Link to='/register'>Create an account</Link>
				</Box>
			</Box>
		</Container>
	);
}
