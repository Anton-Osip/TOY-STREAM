import React, { useState } from 'react'
import GamesPage from './GamesPage/GamesPage.jsx'
import OurWork from './OurWork/OurWork.jsx'
import LastWorks from './LastWorks/LastWorks.jsx'

export default function Games({ language, chengLanguage }) {
	const [switchs, setSwitchs] = useState('games-page')
	return (
		<div className='games'>
			<div className='switchs'>
				<div
					className={
						switchs === 'games-page'
							? 'switch switch--active'
							: 'switch'
					}
					onClick={() => {
						setSwitchs('games-page')
					}}
				>
					<p className='switch__text'>
						{language[chengLanguage].games.gamesPage.title}
					</p>
					<div className='switch__tab'></div>
				</div>
				<div
					className={
						switchs === 'ourWork'
							? 'switch switch--active'
							: 'switch'
					}
					onClick={() => {
						setSwitchs('ourWork')
					}}
				>
					<p className='switch__text'>
						{language[chengLanguage].games.ourWorks}
					</p>
					<div className='switch__tab'></div>
				</div>
				<div
					className={
						switchs === 'LastWorks'
							? 'switch switch--active'
							: 'switch'
					}
					onClick={() => {
						setSwitchs('LastWorks')
					}}
				>
					<p className='switch__text'>
						{language[chengLanguage].games.lastWorks.title}
					</p>
					<div className='switch__tab'></div>
				</div>
			</div>
			<GamesPage
				language={language}
				chengLanguage={chengLanguage}
				switchs={switchs}
				setSwitchs={setSwitchs}
			/>
			<OurWork
				language={language}
				chengLanguage={chengLanguage}
				switchs={switchs}
			/>
			<LastWorks
				language={language}
				chengLanguage={chengLanguage}
				switchs={switchs}
			/>
		</div>
	)
}
