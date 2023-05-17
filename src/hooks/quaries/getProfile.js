import { Auth } from '../utils';
import apiCall from '../api/apiCall';
import { Routes } from '../api';

export const getProfile = async () => {
    
	return apiCall(Routes.getProfile(), 'GET', {}, );
};

