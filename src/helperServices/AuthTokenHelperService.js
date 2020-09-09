import JwtDecode from 'jwt-decode';
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
		return JwtDecode(this._token);
	}

	tokenIsValid() {
		// ...
	}
}

export default AuthTokenHelperService;
