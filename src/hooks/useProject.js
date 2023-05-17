import {  useQuery } from 'react-query';
import { getProject } from './quaries/getProject';
import axios from 'axios';
import { Auth } from './utils';
const useProject = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getProject', ()=>getProject() )

  
      const addNewProject = async (Project) => {
        
        const addProjectRes=   await axios.post(`${apiUrl}/Project`, {...Project},{headers:Headers})
		return addProjectRes;
	};
	const deleteProject = (id)=>{
		const response = axios.delete(`${apiUrl}/Project/${id}`,{ headers :Headers})
        const deleteRes=response
		return deleteRes;
	}

	return {
		Project: data,
		isLoading,
		isError,
        addNewProject,
		deleteProject
	};
};

export default useProject;