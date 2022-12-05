import styles from './Counters.module.scss'

const Counters = ({ minutes, workouts, kgs }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.count}>
				<div className={styles.heading}>Minutes</div>
				<div className={styles.number}>{minutes}</div>
			</div>
			<div className={styles.count}>
				<div className={styles.heading}>Workouts</div>
				<div className={styles.number}>{workouts}</div>
			</div>
			<div className={styles.count}>
				<div className={styles.heading}>Kgs</div>
				<div className={styles.number}>{kgs}</div>
			</div>
		</div>
	)
}

export default Counters
