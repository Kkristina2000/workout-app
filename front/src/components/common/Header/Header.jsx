import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from './Hamburger/Hamburger'

import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/dumbbell.svg'
import arrowImage from '../../../images/header/arrow.svg'

import styles from './Header.module.scss'

const Header = ({ backCallback }) => {
	const location = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button type='button' onClick={() => navigate(-1)}>
					<img src={arrowImage} alt='Back' />
				</button>
			) : (
				<button
					type='button'
					onClick={() => navigate(isAuth ? '/profile' : '/auth')}
				>
					<img
						src={isAuth ? authImage : userImage}
						alt='Authorization'
						height='40'
					/>
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
