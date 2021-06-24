import React from 'react'
import BtnLang from './BtnLang.jsx'
import Links from './Links.jsx'

export default function Nav({
	language,
	chengLanguage,
	setChengLanguage,
	burgerMenu,
	setBurgerMenu,
}) {
	return (
		<div className='header__right'>
			<div
				className={
					burgerMenu
						? 'header__nav header__nav--active'
						: 'header__nav'
				}
			>
				<Links
					language={language}
					chengLanguage={chengLanguage}
					burgerMenu={burgerMenu}
					setBurgerMenu={setBurgerMenu}
				/>
			</div>
			<BtnLang
				chengLanguage={chengLanguage}
				setChengLanguage={setChengLanguage}
			/>
		</div>
	)
}
