import {  useQuery } from 'react-query';
import { getBlog } from './quaries/getBlog';
import { apiUrl } from './api';
import axios from 'axios'
import { Auth } from './utils';
import { getUser } from './quaries/getUser';



const useUser = () => {
	const { options:Headers} = Auth.getAuthenticatedUser()	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getUser', ()=>getUser(),{
		refetchInterval: 6000,
        } )


	
  

   
	const updateUser = async (updateUser, id) => {
        
        const updateRes=   await axios.put(`${apiUrl}/users/user/${id}`, {...updateUser},{headers:Headers})
	
        return updateRes;
	};

	
	return {
		data: data?.data,
		isLoading,
		isError,
		updateUser,
	};
};

export default useUser;