import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getUser = async () => {
	return apiCall(Routes.getUser(), 'GET', {}, );
};

