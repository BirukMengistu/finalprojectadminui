import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getBlog = async () => {
	return apiCall(Routes.getBlog(), 'GET', {}, );
};

