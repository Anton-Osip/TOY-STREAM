import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Links({ language, chengLanguage }) {
	return (
		<nav className='links'>
			{language[chengLanguage].header.map((item, index) => (
				<NavLink
					activeClassName='link--active'
					className='link'
					key={index}
					to={`${language.NavLink[index]}`}
				>
					{item}
				</NavLink>
			))}
		</nav>
	)
}
