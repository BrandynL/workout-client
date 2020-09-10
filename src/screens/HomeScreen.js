import React from 'react';
import { Container, Box } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext/UserContext';

export default function HomeScreen() {
	const { user } = useContext(UserContext);
	return (
		<Container>
			<Box
				minHeight='100vh'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<h1>Home Screen</h1>
				{user ? 'logged in' : 'logged out'}
			</Box>
		</Container>
	);
}
