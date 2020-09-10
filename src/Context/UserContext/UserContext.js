import React, { useState } from 'react';
import AuthTokenHelperService from '../../helperServices/AuthTokenHelperService';

export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
	const tokenHelper = new AuthTokenHelperService();
	const [user, setuser] = useState(tokenHelper.getDecodedToken());

	const context = { user, setuser };
	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};
