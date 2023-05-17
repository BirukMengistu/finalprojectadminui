
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Blogs from '../../Pages/Blogs';

const Home = React.lazy(() => import("../../Pages/Home"));

const Router = () => {

return (
		<>
		      
                <Routes>
					<Route exact={true} path='/home' element={
                     <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>
                    } />
                   <Route exact={true} path='/blogs' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Blogs />
			          </Suspense>
                    } />
                     
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
