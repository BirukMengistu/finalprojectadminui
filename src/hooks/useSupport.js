import {  useQuery } from 'react-query';
import { getBlog } from './quaries/getBlog';
import { apiUrl } from './api';
import axios from 'axios'
import { Auth } from './utils';
import { getSupport } from './quaries/getSupport';


const useSupport = () => {
	const {data:user , options:Headers} = Auth.getAuthenticatedUser()	
	const {
		data,
		isLoading,
		isError,
	 } = useQuery('getSupport', ()=>getSupport(),{
		refetchInterval: 6000,
	  }  )


	
  

	const AddNewSupportMessage = async (newSupport) => {
        
        const addSupportRes=   await axios.post(`${apiUrl}/support/`, {...newSupport},{headers:Headers})
		return addSupportRes;
	};
	const deleteSupportMessage = (id)=>{
		const responseSupportMessage = axios.delete(`${apiUrl}/Support/${id}`,{ headers :Headers})
        const deleteSupportMessage=responseSupportMessage
		return deleteSupportMessage;
	}
	return {
		SupportMessage: data?.data,
		isLoading,
		isError,
		AddNewSupportMessage,
		deleteSupportMessage
	};
};

export default useSupport;