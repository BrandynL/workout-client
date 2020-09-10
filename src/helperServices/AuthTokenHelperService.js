import JwtDecode from 'jwt-decode';
const { token } = require('../config');

class AuthTokenHelperService {
	constructor() {
		this._token = localStorage.getItem(token.name);
	}

	getToken() {
		return this.getDecodedToken();
	}

	setToken(newToken) {
		localStorage.setItem(token.name, newToken);
	}

	getDecodedToken() {
		return JwtDecode(this._token);
	}

	tokenIsValid() {
		return this.getDecodedToken().exp * 1000 > Date.now();
	}

	removeToken() {
		localStorage.removeItem(token.name);
	}
}

export default AuthTokenHelperService;
