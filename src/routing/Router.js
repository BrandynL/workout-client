import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import { useContext } from 'react';
import { UserContext } from '../UserContext/UserContext';

const Router = () => {
	const { user } = useContext(UserContext);

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<HomeScreen />
				</Route>
				<Route path='/login'>
					{user.token ? <Redirect to='/' /> : <LoginScreen />}
				</Route>
				<Route path='/register'>
					{user.token ? <Redirect to='/' /> : <RegisterScreen />}
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
