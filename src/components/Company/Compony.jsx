import React, { useState } from 'react'
import Studia from './Studia/Studia.jsx'
import Team from './Team/Team.jsx'

export default function Compony({ language, chengLanguage }) {
	const [switchs, setSwitchs] = useState('studia')
	return (
		<div className='compony'>
			<div className='container'>
				<div className='switchs'>
					<div
						className={
							switchs === 'studia'
								? 'switch switch--active'
								: 'switch'
						}
						onClick={() => {
							setSwitchs('studia')
						}}
					>
						<p className='switch__text'>
							{language[chengLanguage].compony.studia.switch}
						</p>
						<div className='switch__tab'></div>
					</div>
					<div
						className={
							switchs === 'team'
								? 'switch switch--active'
								: 'switch'
						}
						onClick={() => {
							setSwitchs('team')
						}}
					>
						<p className='switch__text'>
							{language[chengLanguage].compony.team.switch}
						</p>
						<div className='switch__tab'></div>
					</div>
				</div>
			</div>
			<div className='compony__slider'>
				<Studia
					language={language}
					chengLanguage={chengLanguage}
					switchs={switchs}
				/>
				<Team
					language={language}
					chengLanguage={chengLanguage}
					switchs={switchs}
				/>
			</div>
		</div>
	)
}
