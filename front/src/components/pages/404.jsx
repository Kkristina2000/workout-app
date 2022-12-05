import Layout from '../common/Layout'

import newWorkout from '../../images/new-workout.jpg'

const error404 = () => {
	return (
		<>
			<Layout bgImage={newWorkout} heading='Page not found' />
			<div className='wrapper-inner-page'>404 page not found</div>
		</>
	)
}

export default error404
