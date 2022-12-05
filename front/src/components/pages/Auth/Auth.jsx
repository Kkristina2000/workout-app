import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api'
import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../common/Layout'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'
import Alert from '../../ui/Alert/Alert'
import Loader from '../../ui/Loader'

import newWorkout from '../../../images/new-workout.jpg'

import styles from './Auth.module.scss'


const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [type, setType] = useState('auth')

	const navigate = useNavigate()
	const { setIsAuth } = useAuth()

	const successLogin = token => {
		localStorage.setItem('token', token)
		setIsAuth(true)

		setEmail('')
		setPassword('')

		navigate('/')
	}

	const {
		mutate: register,
		isLoading,
		error
	} = useMutation(
		'Registration',
		() =>
			$api({
				url: '/users',
				type: 'POST',
				body: { email, password },
				auth: false
			}),
		{
			onSuccess(data) {
				successLogin(data.token)
			}
		}
	)

	const {
		mutate: auth,
		isLoading: isLoadingAuth,
		error: errorAuth
	} = useMutation(
		'Auth',
		() =>
			$api({
				url: '/users/login',
				type: 'POST',
				body: { email, password },
				auth: false
			}),
		{
			onSuccess(data) {
				successLogin(data.token)
			}
		}
	)

	const handleSubmit = e => {
		e.preventDefault()

		if (type === 'auth') {
			auth()
		} else {
			register()
		}
	}

	return (
		<>
			<Layout bgImage={newWorkout} heading='Authorization or Registration' />
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{errorAuth && <Alert type='error' text={errorAuth} />}
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit}>
					<Field
						type='text'
						placeholder='Enter email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<Field
						type='text'
						placeholder='Enter password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<div className={styles.wrapperButtons}>
						<Button
							text='Sign in'
							callback={() => {
								setType('auth')
							}}
						/>
						<Button
							text='Sign up'
							callback={() => {
								setType('reg')
							}}
						/>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
