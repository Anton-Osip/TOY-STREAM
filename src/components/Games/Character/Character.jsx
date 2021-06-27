import React from 'react'

export default function Character() {
	return (
		<div className='Character'>
			<img
				className='Character_shadow pixelart'
				src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacterShadow.png'
				alt='Shadow'
			/>
			<img
				className='Character_spritesheet pixelart face-down'
				src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/21542/DemoRpgCharacter.png'
				alt='Character'
			/>
		</div>
	)
}
