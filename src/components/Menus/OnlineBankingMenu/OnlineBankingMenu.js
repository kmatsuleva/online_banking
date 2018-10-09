import React from 'react';
import './styles.css';
import Logo from '../../Common/Logo/Logo';
import MenuItem from '../MenuItem/MenuItem';

const OnlineBankingMenu = () => {
	const items = [
		{ id: 1, title: 'accounts', reference: '/accounts' },
		{ id: 2, title: 'transaction', reference: '/transaction' },
		{ id: 3, title: 'operations', reference: '/operations' },
		{ id: 4, title: 'settings', reference: '#' },
		{ id: 5, title: 'log out', reference: '#' }
	];

	return (
		<ul className="onlineMenu">
			<li className="onlineMenu__logo">
				<Logo src={require('../../../images/logo.png')} to="/" alt="logo" className="onlineMenu__logo-image" />
			</li>
			{items.map((item) => (
				<MenuItem key={item.id} title={item.title} reference={item.reference} className="link" />
			))}
		</ul>
	);
};

export default OnlineBankingMenu;
