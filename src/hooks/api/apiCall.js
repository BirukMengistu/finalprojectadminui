import axios from 'axios';
import { apiUrl } from '../api';
import { Auth } from '../utils';
const authenticatedUser = Auth.getAuthenticatedUser();
const apiCall = async (path, type, body, headers) => {
	const config = {
		url: apiUrl + path,
		method: type,
		data: body,
		headers: headers || authenticatedUser.options
	};
	return axios(config);
};

export default apiCall;