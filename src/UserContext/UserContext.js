import React, { useState } from 'react';

export const UserContext = React.createContext({ user: {} });

export const UserContextProvider = ({ children }) => {
	const [user, setuser] = useState({});
	const context = { user, setuser };
	return (
		<UserContext.Provider value={context}>{children}</UserContext.Provider>
	);
};
