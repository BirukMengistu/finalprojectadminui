import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getEducation = async () => {
	return apiCall(Routes.getEducation(), 'GET', {}, );
};