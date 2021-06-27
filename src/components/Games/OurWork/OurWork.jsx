import React from 'react'
import img1 from '../../../assets/img/games/projects/projects1.png'
import img2 from '../../../assets/img/games/projects/projects2.png'
import img3 from '../../../assets/img/games/projects/projects3.png'
import img4 from '../../../assets/img/games/projects/projects4.png'

export default function OurWork({
	language,
	chengLanguage,
	switchs,
	setActive,
	setDataId,
}) {
	const arrImg = [img1, img2, img3, img4]
	return (
		<div
			className={
				switchs === 'ourWork' ? 'ourWork' : ' ourWork undisplay '
			}
		>
			<div className='container'>
				<div className='ourWork__cards'>
					{language[chengLanguage].games.ourWork.map(
						(item, index) => (
							<div
								className={
									index % 2 == 0
										? 'ourWork__card ourWork__card-left'
										: 'ourWork__card'
								}
								key={index}
							>
								<div className='ourWork__img'>
									<img src={arrImg[item.img]} alt='' />
								</div>
								<div className='ourWork__info'>
									<h3 className='ourWork__title'>
										{item.title}
									</h3>
									<p className='ourWork__title-info'>
										{item.titleInfo}
									</p>
									<p className='ourWork__description'>
										{item.description}
									</p>
									<button
										className='ourWork__btn btn'
										data-id={item.id}
										onClick={() => {
											setActive(true)
											setDataId(item.id)
										}}
									>
										{item.btnText}
									</button>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	)
}
