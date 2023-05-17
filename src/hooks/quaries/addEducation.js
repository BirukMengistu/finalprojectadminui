import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const addEducation = async () => {
	return apiCall(Routes.getEducation(), 'POST', {}, );
};