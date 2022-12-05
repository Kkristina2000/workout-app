import React from 'react'
import cn from 'classnames'
import Header from '../common/Header/Header'

import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, heading = '' }) => {
	return (
		<div
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
