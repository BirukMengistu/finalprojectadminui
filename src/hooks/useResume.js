import {  useQuery } from 'react-query';
import { getResume } from './quaries/getResume';
import axios from 'axios';
import { Auth } from './utils';
const useReference = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getResume', () => getResume() )

  
      const addUpdateResume = async (Reference) => {
        
        const addReferenceRes=   await axios.post(`${apiUrl}/reference`, {...Reference},{headers:Headers})
		return addReferenceRes;
	};

	return {
		resume: data,
		isLoading,
		isError,
        addUpdateResume
	};
};

export default useReference;