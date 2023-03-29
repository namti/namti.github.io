import React from 'react';
import logo from '../view/images/logo.svg';
import { ReactComponent as Logo } from '../view/images/logo.svg';

const Header = (props) => {
	return (
		<header className="d-flex align-items-center py-5">
			<div className="w-25 d-flex align-items-center justify-content-start">
				<span class="material-symbols-outlined">design_services</span>
				<span class="material-symbols-outlined">keyboard</span>
			</div>

			<div className="w-50 d-flex align-items-center justify-content-center">
				<Logo className="logo" />
			</div>

			<div className="w-25 d-flex align-items-center justify-content-end">
			</div>
		</header>
	);
};

export default Header;
