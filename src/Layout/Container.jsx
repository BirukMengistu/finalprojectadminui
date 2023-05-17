import PropTypes from 'prop-types';
import styles from '../Asset/styles/layout/container.module.css'

const Container = ({ children, customStyle }) => {
	return (
		<div className={styles['l-container']} style={customStyle}>
			{children}
		</div>
	);
};



export default Container;
