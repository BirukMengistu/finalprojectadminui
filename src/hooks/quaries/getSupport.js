import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getSupport = async () => {
	return apiCall(Routes.getsupport(), 'GET', {}, );
};

