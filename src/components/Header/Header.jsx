import React, { useState } from 'react'
import Logo from './../../assets/img/main/logo.svg'
import Nav from './Nav/Nav.jsx'

export default function Header(props) {
	const [burgerMenu, setBurgerMenu] = useState(false)
	return (
		<header className='header'>
			<div className='container'>
				<div className='row header__wrapper'>
					<img
						src={Logo}
						alt='logo'
						className='header__logo col-lg-3'
					/>
					<Nav
						language={props.language}
						chengLanguage={props.chengLanguage}
						setChengLanguage={props.setChengLanguage}
						burgerMenu={burgerMenu}
					/>
					<div
						className={
							burgerMenu
								? 'header__menu header__menu--active'
								: 'header__menu '
						}
						onClick={() => {
							setBurgerMenu(!burgerMenu)
						}}
					>
						<div className='header__menu-line'></div>
					</div>
				</div>
			</div>
		</header>
	)
}
