import React from 'react';
import './Header.css'
import logo from '../../logo.png'

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<h1>Brazil Football Team</h1>
		</div>
	);
};

export default Header;