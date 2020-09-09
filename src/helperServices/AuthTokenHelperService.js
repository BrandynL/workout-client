const { token } = require('../config');

class AuthTokenHelperService {
	constructor() {
		this._token = localStorage.getItem(token.name);
	}

	getToken() {
		return this.decode();
	}

	setToken(newToken) {
		localStorage.setItem(token.name, newToken);
	}

	decode() {
		const decoded = {};
		this._token.split('.').map((token) => Object.assign(decoded, token));
		return decoded;
	}

	tokenIsValid() {
		// ...
	}
}

export default AuthTokenHelperService;
