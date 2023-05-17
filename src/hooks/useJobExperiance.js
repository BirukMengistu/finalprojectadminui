import {  useQuery } from 'react-query';
import { getJobExperiance } from './quaries/getJobExperiance';
import axios from 'axios';
import { Auth } from './utils';
const useJobExperiance = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getJobExperiance', ()=>getJobExperiance() )

  
      const addNewJobExperiance =  (jobExperiance) => {
        const addJobExperianceRes =    axios.post(`${apiUrl}/jobexperiance`, {...jobExperiance},{headers:Headers})
		return addJobExperianceRes;
	};

	const deleteExperiance = (id)=>{
		const response = axios.delete(`${apiUrl}/jobexperiance/${id}`,{ headers :Headers})
        const deleteRes=response
		return deleteRes;
	}
	return {
		JobExperiance: data,
		isLoading,
		isError,
        addNewJobExperiance,
		deleteExperiance
	};
};

export default useJobExperiance;