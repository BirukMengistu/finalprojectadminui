import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getProject = async () => {
    
	return apiCall(Routes.getProject(), 'GET', {}, );
};

