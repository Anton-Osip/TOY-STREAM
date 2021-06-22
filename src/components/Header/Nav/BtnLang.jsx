import React from 'react'

export default function BtnLang({ setChengLanguage, chengLanguage }) {
	return (
		<div>
			<button
				className='header__btn'
				onClick={() => {
					setChengLanguage(chengLanguage === 'ru' ? 'eng' : 'ru')
				}}
			>
				{chengLanguage}
			</button>
		</div>
	)
}
