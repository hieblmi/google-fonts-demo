import React, { Component } from 'react';

import animate from 'animate.css';

import styles from './Header.css';



class Header extends Component {


	render() {
		console.log(animate);
		const className = {styles.header} + 'pulse animated';
		return (
			<div className={className}>
			<span>Google Font Demo<span role="img" aria-label="jsx-a11y/accessible-emoji">👍</span></span>
			</div> 
			);
	}
}

export default Header;
