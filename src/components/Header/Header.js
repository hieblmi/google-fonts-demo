import React, { Component } from 'react';
import styles from './Header.css';
import animate from 'animate.css';


export default class Header extends Component {

	render() {
		let googleStyle = `${styles.header} ${animate.bounceIn} ${animate.animated}`;
		return (
			<div className={googleStyle}>
			<span>Font Demo with ReactJS</span>
			</div> 
			);
	}
}
