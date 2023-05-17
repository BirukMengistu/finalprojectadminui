import {  useQuery } from 'react-query';
import { getReference } from './quaries/getReference';
import axios from 'axios';
import { Auth } from './utils';
const useReference = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getReference', () => getReference() )

    
      const addNewReference =  (newReference) => {
        const addReferenceRes=    axios.post(`${apiUrl}/reference/`, {...newReference},{headers:Headers})
		console.log(addNewReference.Headers)
		return addReferenceRes;
	};

	return {
		reference: data,
		isLoading,
		isError,
        addNewReference
	};
};

export default useReference;