import React from 'react';
import { Container, Box, Button } from '@material-ui/core';
import RegisterForm from '../components/forms/RegisterForm';
import { Link } from 'react-router-dom';

export default function RegisterScreen() {
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
				<h1>Create an account</h1>
				<RegisterForm />
				<Box my={5} textAlign='center'>
					<Link to='/login'>Already have an account?</Link>
				</Box>
			</Box>
		</Container>
	);
}
