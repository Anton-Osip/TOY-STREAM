import React from 'react'
import BtnLang from './BtnLang.jsx'
import Links from './Links.jsx'

export default function Nav({
	language,
	chengLanguage,
	setChengLanguage,
	burgerMenu,
}) {
	return (
		<div>
			<div
				className={
					burgerMenu
						? 'header__nav header__nav--active'
						: 'header__nav'
				}
			>
				<Links language={language} chengLanguage={chengLanguage} />
				<BtnLang
					chengLanguage={chengLanguage}
					setChengLanguage={setChengLanguage}
				/>
			</div>
		</div>
	)
}
