import React from 'react'
import Behance from '../../../assets/img/main/social/Behance.svg'
import Dribbble from '../../../assets/img/main/social/Dribbble.svg'
import Facebook from '../../../assets/img/main/social/Facebook.svg'
import Pintrest from '../../../assets/img/main/social/Pintrest.svg'
import Snapchat from '../../../assets/img/main/social/Snapchat.svg'
import linkedin from '../../../assets/img/main/social/linkedin.svg'

export default function Social() {
	return (
		<div className='footer__social'>
			<a href='' className='social__links'>
				<img src={Pintrest} alt='' className='social__img' />
			</a>
			<a href='' className='social__links'>
				<img src={Behance} alt='' className='social__img' />
			</a>
			<a href='' className='social__links'>
				<img src={Dribbble} alt='' className='social__img' />
			</a>
			<a href='' className='social__links'>
				<img src={Snapchat} alt='' className='social__img' />
			</a>
			<a href='' className='social__links'>
				<img src={linkedin} alt='' className='social__img' />
			</a>
			<a href='' className='social__links'>
				<img src={Facebook} alt='' className='social__img' />
			</a>
		</div>
	)
}
