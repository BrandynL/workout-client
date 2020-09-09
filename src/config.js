const API = {
	dev: {
		api: {
			v1: {
				base: 'https://127.0.0.1:8000',
				endpoints: {
					user_auth: '/api/v1/auth',
					user_register: '/api/v1/register',
				},
			},
		},
	},
	prod: {},
};

export const api =
	process.env.NODE_ENV === 'development' ? API.dev.api : API.prod.api;
