import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import reportWebVitals from './reportWebVitals'

import AppProvider from './provider/AppProvider'

import '../../front/src/scss/index.scss'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AppProvider />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
)

reportWebVitals()
