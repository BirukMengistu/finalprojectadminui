
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Blogs from '../../Pages/Blogs';
import Inbox from '../../Pages/Inbox';
import { Auth } from '../../hooks/utils';
import UserInfo from '../../components/user/UserInfo';
import Users from '../../Pages/Users';

const Home = React.lazy(() => import("../../Pages/Home"));

const Router = () => {
    const isAuth  = Auth.isAuth()
return (
		<>
		      
                <Routes>
					<Route exact={true} path='/' element={
                     <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>
                    } />
                    {isAuth && <Route exact={true} path='/blogs' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Blogs />
			          </Suspense>
                    } />}
                   
                   {isAuth && <Route exact={true} path='/message' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Inbox />
			          </Suspense>
                    } />}

                  
                     <Route exact={true} path='/userAccount' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Users />
			          </Suspense>
                    } /> 

				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
