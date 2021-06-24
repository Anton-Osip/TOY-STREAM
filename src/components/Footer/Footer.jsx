import React from 'react'
import Links from './../Header/Nav/Links.jsx'
import Social from './Social/Social.jsx'
export default function Footer(props) {
	return (
		<footer className='footer'>
			<div className='container'>
				<p className='footer__title'>© Toy.Stream, Inc.</p>
				<div className='row footer__wrapper'>
					<Links
						language={props.language}
						chengLanguage={props.chengLanguage}
						setBurgerMenu={props.setBurgerMenu}
						burgerMenu={props.burgerMenu}
					/>
				</div>
				<Social />
			</div>
		</footer>
	)
}
