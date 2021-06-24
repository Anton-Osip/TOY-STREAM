import React from 'react'
import Logo from './../../assets/img/main/logo.svg'
import Nav from './Nav/Nav.jsx'

export default function Header({
	language,
	chengLanguage,
	setChengLanguage,
	burgerMenu,
	setBurgerMenu,
}) {
	return (
		<header className='header'>
			<div className='container'>
				<div className='row header__wrapper'>
					<div className='header__left'>
						<div
							className={
								burgerMenu
									? 'header__menu header__menu--active'
									: 'header__menu'
							}
							onClick={() => {
								setBurgerMenu(!burgerMenu)
							}}
						>
							<div className='header__menu-line'></div>
						</div>
						<img src={Logo} alt='' className='header__logo col-3' />
					</div>

					<Nav
						language={language}
						chengLanguage={chengLanguage}
						setChengLanguage={setChengLanguage}
						burgerMenu={burgerMenu}
						setBurgerMenu={setBurgerMenu}
					/>
				</div>
			</div>
		</header>
	)
}
