
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Blogs from '../../Pages/Blogs';
import Inbox from '../../Pages/Inbox';

const Home = React.lazy(() => import("../../Pages/Home"));

const Router = () => {

return (
		<>
		      
                <Routes>
					<Route exact={true} path='/' element={
                     <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>
                    } />
                   <Route exact={true} path='/blogs' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Blogs />
			          </Suspense>
                    } />
                    <Route exact={true} path='/message' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Inbox />
			          </Suspense>
                    } />
                     
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
