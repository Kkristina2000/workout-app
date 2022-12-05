import Home from './components/pages/Home/Home'
import Auth from './components/pages/Auth/Auth'
import NewWorkout from './components/pages/NewWorkout/NewWorkout'
import NewExercise from './components/pages/NewExercise/NewExercise'
import Profile from './components/pages/Profile/Profile'
import SingleWorkout from './components/pages/SingleWorkout/SingleWorkout'

export const dataRoutes = [
	{
		path: '/',
		exact: true,
		component: <Home />,
		auth: false
	},
	{
		path: '/auth',
		exact: false,
		component: <Auth />,
		auth: false
	},
	{
		path: '/new-workout',
		exact: false,
		component: <NewWorkout />,
		auth: true
	},
	{
		path: '/new-exercise',
		exact: false,
		component: <NewExercise />,
		auth: true
	},
	{
		path: '/profile',
		exact: false,
		component: <Profile />,
		auth: true
	},
	{
		path: '/workout/:id',
		exact: false,
		component: <SingleWorkout />,
		auth: true
	}
]
