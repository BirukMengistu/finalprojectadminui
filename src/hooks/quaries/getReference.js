import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getReference = async () => {
	return apiCall(Routes.getReference(), 'GET', {}, );
};