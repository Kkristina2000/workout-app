import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/pages/404'
import { dataRoutes } from './dataRoutes'

import { useAuth } from './hooks/useAuth'

const App = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{dataRoutes.map(route => {
					if (route.auth && !isAuth) {
						return false
					}
					return (
						<Route
							key={`route ${route.path}`}
							path={route.path}
							exact={route.exact}
							element={route.component}
						/>
					)
				})}
				<Route component={<Error404 />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
