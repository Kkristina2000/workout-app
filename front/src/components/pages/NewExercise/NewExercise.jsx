import { useState } from 'react'
import { useMutation } from 'react-query'
import cn from 'classnames'

import { $api } from '../../../api/api'

import Layout from '../../common/Layout'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'
import Alert from '../../ui/Alert/Alert'
import Loader from '../../ui/Loader'

import newExercise from '../../../images/new-exercise-bg.jpg'
import styles from './NewWorkout.module.scss'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit']

const NewExercise = () => {
	const [name, setName] = useState('')
	const [times, setTimes] = useState(0)
	const [imageName, setImageName] = useState('chest')

	const { isSuccess, mutate, isLoading, error } = useMutation(
		'Create new exercise',
		() =>
			$api({
				url: '/exercises',
				type: 'POST',
				body: { name, times, imageName }
			}),
		{
			onSuccess() {
				setName('')
				setTimes(0)
				setImageName('chest')
			}
		}
	)

	const handleSubmit = e => {
		e.preventDefault()
		if (name && times && imageName) mutate()
	}

	return (
		<>
			<Layout bgImage={newExercise} heading='Create new exercise' />
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit}>
					<Field
						type='text'
						placeholder='Name'
						value={name}
						onChange={e => setName(e.target.value)}
						required
					/>
					<Field
						type='text'
						placeholder='Times'
						value={times}
						onChange={e => setTimes(e.target.value)}
						required
					/>
					<div className={styles.images}>
						{data.map(name => (
							<img
								key={`exercise img ${name}`}
								src={`/uploads/exercises/${name}.svg`}
								alt={name}
								className={cn({ [styles.active]: imageName === name })}
								onClick={() => setImageName(name)}
							/>
						))}
					</div>
					<Button text='Create' callback={() => {}} />
				</form>
			</div>
		</>
	)
}

export default NewExercise
