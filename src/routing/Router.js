import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact>
				<HomeScreen />
			</Route>
			<Route path='/login'>
				<LoginScreen />
			</Route>
			<Route path='/register'>
				<RegisterScreen />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Router;
