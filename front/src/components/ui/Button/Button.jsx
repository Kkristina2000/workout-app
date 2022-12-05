import styles from './Button.module.scss'

const Button = ({ text, callback, type = 'main' }) => {
	return (
		<div className={styles.wrapper}>
			<button onClick={callback} className={`${styles.button} ${styles[type]}`}>
				{text}
			</button>
		</div>
	)
}

export default Button
