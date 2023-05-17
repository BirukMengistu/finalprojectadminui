import {  useQuery } from 'react-query';
import { getBlog } from './quaries/getBlog';
import { apiUrl } from './api';
import axios from 'axios'
import { Auth } from './utils';



const useBlog = () => {
	const {data:user , options:Headers} = Auth.getAuthenticatedUser()	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getBlog', ()=>getBlog(),{
		refetchInterval: 6000,
	  }  )


	
  

	const AddNewBlog = async (newBlog) => {
        
        const addBlogRes=   await axios.post(`${apiUrl}/blog/`, {...newBlog},{headers:Headers})
		return addBlogRes;
	};
	const updateBlog = async (newBlog, id) => {
        const addBlogRes=   await axios.put(`${apiUrl}/blog/${id}`, {...newBlog},{headers:Headers})
		return addBlogRes;
	};

	const deleteBlog = (id)=>{
		const response = axios.delete(`${apiUrl}/blog/${id}`,{ headers :Headers})
        const deleteRes=response
		return deleteRes;
	}
	return {
		blog: data?.data,
		isLoading,
		isError,
		updateBlog,
		AddNewBlog,
		deleteBlog
	};
};

export default useBlog;