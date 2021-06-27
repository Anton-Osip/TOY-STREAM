import React from 'react'
import Character from './../Character/Character.jsx'
export default function GamesPage({
	language,
	chengLanguage,
	switchs,
	setSwitchs,
}) {
	return (
		<div
			className={
				switchs === 'games-page' ? 'games-page' : 'games-page undisplay'
			}
		>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-8 games-page__info'>
						<h1 className='games-page__title'>
							{language[chengLanguage].games.gamesPage.title}
						</h1>
						<p className='games-page__description'>
							{
								language[chengLanguage].games.gamesPage
									.description[0]
							}
						</p>
						<p className='games-page__description'>
							{
								language[chengLanguage].games.gamesPage
									.description[1]
							}
						</p>
						<button
							className='games-page__btn btn'
							onClick={() => {
								setSwitchs('ourWork')
							}}
						>
							<span className='btn__text'>
								{language[chengLanguage].games.gamesPage.btn}
							</span>
							<span className='btn__arrow'>&darr;</span>
						</button>
					</div>
					<div className='games-page__bg col-lg-11'>
						<div className=' games-page__img'>
							<Character />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
