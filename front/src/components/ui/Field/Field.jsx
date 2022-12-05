import styles from './Field.module.scss'

const Field = ({ placeholder, value, onChange, type = 'text' }) => {
	return (
		<input
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={styles.input}
			type={type}
		/>
	)
}

export default Field
