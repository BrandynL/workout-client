const API = {
	dev: {
		v1: {
			base: 'https://127.0.0.1:8000',
			endpoints: {
				user_auth: '/api/v1/auth',
				user_register: '/api/v1/register',
			},
		},
	},
	prod: {},
};

const TOKEN = {
	dev: {
		name: 'x-auth-token',
	},
};

export const api = process.env.NODE_ENV === 'development' ? API.dev : API.prod;

export const token =
	process.env.NODE_ENV === 'development' ? TOKEN.dev : TOKEN.prod;
