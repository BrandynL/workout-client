import React, { useContext } from 'react';
import { Container, Box } from '@material-ui/core';
import { UserContext } from '../UserContext/UserContext';

export default function HomeScreen() {
	const { user } = useContext(UserContext);

	return (
		<Container>
			<Box>{console.log(user)}</Box>
		</Container>
	);
}
