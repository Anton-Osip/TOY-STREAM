import React from 'react'
import Map from './Map/Map.jsx'
import Social from './../Footer/Social/Social.jsx'

export default function Contacts({ language, chengLanguage }) {
	return (
		<div className='contacts'>
			<div className='container'>
				<div className='cintacts__info'>
					<h1 className='contacts__title'>
						{language[chengLanguage].contacts.title}
					</h1>
					<a href={`tel:+79266888569`} className='contacts__phone'>
						{language[chengLanguage].contacts.phone}
					</a>
					<a
						href={`mailto:${language[chengLanguage].contacts.mail}}`}
						className='contacts__mail'
					>
						{language[chengLanguage].contacts.mail}
					</a>
					<address className='contacts__adress'>
						{language[chengLanguage].contacts.adress}
					</address>
					<Social />
				</div>
				<div className='contacts__map'>
					<Map />
				</div>
			</div>
		</div>
	)
}
