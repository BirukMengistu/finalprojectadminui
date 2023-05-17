import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getJobExperiance = async () => {
	return apiCall(Routes.getJobExperiance(), 'Get', {}, );
};