

import { MantineProvider } from '@mantine/core';
import {  Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Routes from './Layout/Routes/index';


function App() {
	
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
			  refetchOnWindowFocus: false,
			  refetchOnmount: false,
			  refetchOnReconnect: false,
			  retry: false,
			  staleTime: 0,
			  cacheTime: 1000 * 60 * 60 * 24, // 24 hours
			},
		  },
	});

	return (
		<MantineProvider
			withGlobalStyles={true}
			withNormalizeCSS={true}
			
			theme={{
				colors: {
					brand: [
            '#FFF8E1',
            '#FFECB3',
            '#FFE082',
            '#FFD54F',
            '#FFCA28',
            '#FFB300',
            '#FFA000',
            '#FF8F00',
            '#FFD740',
            '#FFC400'
					]
				},
				primaryColor: 'brand',
				colorScheme :'light'
				

               
			}}
		>
		 <Notifications position='top-center' limit={3} />
				<QueryClientProvider client={queryClient}>
					<div id='App' className='App'>
						<BrowserRouter>
							<Layout>
								 <Routes /> 
							</Layout>
						</BrowserRouter>
					</div>
				</QueryClientProvider>
    
	</MantineProvider>
  );
}

export default App;