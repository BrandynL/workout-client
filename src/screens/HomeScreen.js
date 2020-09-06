import React from 'react';
import { Container, Box } from '@material-ui/core';

export default function HomeScreen() {
	return (
		<Container>
			<Box
				minHeight='100vh'
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<h1>Home Screen</h1>
			</Box>
		</Container>
	);
}
