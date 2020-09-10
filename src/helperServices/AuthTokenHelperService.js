import JwtDecode from 'jwt-decode';
const { token } = require('../config');

class AuthTokenHelperService {
	constructor() {
		this._token = localStorage.getItem(token.name);
	}

	getToken() {
		if (this._token) return this._token();
	}

	getDecodedToken() {
		if (this._token) return JwtDecode(this._token);
	}

	tokenIsValid() {
		if (this._token && this.getDecodedToken().exp * 1000 > Date.now()) {
			return true;
		} else {
			this.removeToken();
			return false;
		}
	}

	setToken(newToken) {
		localStorage.setItem(token.name, newToken);
	}

	removeToken() {
		localStorage.removeItem(token.name);
	}
}

export default AuthTokenHelperService;
