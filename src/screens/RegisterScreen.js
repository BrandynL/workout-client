import React from 'react';
import { Container, Box } from '@material-ui/core';
import RegisterForm from '../components/forms/RegisterForm';

export default function RegisterScreen() {
	return (
		<Container>
			<Box maxWidth={600} m='auto'>
				<RegisterForm />
			</Box>
		</Container>
	);
}
