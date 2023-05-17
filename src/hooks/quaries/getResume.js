import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getResume = async () => {
	return apiCall(Routes.getResume(), 'GET', {}, );
};