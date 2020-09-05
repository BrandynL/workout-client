import React from 'react';
import { Container, Box } from '@material-ui/core';
import LoginForm from '../components/forms/LoginForm';

export default function LoginScreen() {
	return (
		<Container>
			<Box maxWidth={600} m='auto'>
				<LoginForm />
			</Box>
		</Container>
	);
}
