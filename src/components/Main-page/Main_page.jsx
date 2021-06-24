import React from 'react'
import { NavLink } from 'react-router-dom'

import mainPageBg from './../../assets/img/mainPage/main-page-bg.png'

export default function Main_page({ language, chengLanguage }) {
	return (
		<div className='main-page'>
			<div className='container'>
				<div className='main-page__bg '>
					<div className='main-page__img'>
						<img src={mainPageBg} />
					</div>
				</div>
				<div className='main-page__text'>
					<h1 className='main-page__title'>
						{language[chengLanguage].main_page.title}
					</h1>
					<div className='main-page__info'>
						<NavLink to={`/games`} className='main-page__btn '>
							<button className=' btn'>
								{language[chengLanguage].main_page.button}
							</button>
						</NavLink>
						<p className='main-page__description'>
							{language[chengLanguage].main_page.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
