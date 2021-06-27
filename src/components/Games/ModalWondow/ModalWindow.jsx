import React from 'react'
import img1 from '../../../assets/img/games/projects/projects1.png'
import img2 from '../../../assets/img/games/projects/projects2.png'
import img3 from '../../../assets/img/games/projects/projects3.png'
import img4 from '../../../assets/img/games/projects/projects4.png'

export default function ModalWindow({
	active,
	setActive,
	dataId,
	language,
	chengLanguage,
}) {
	const arrImg = [img1, img2, img3, img4]
	return (
		<div
			className={active ? 'modalwindow active' : 'modalwindow'}
			onClick={() => {
				setActive(false)
			}}
		>
			{language[chengLanguage].games.ourWork.map(item => {
				if (item.id === dataId)
					return (
						<div
							key={dataId}
							className='modalwindow__content'
							onClick={event => {
								event.stopPropagation()
							}}
						>
							<div
								className='modalwindow__cross'
								onClick={() => {
									setActive(false)
								}}
							>
								<div className='modalwindow__cross-line'></div>
							</div>
							<div className='modalwindow__info'>
								<h3 className='modalwindow__title'>
									{item.title}
								</h3>
								<p className='modalwindow__title-info'>
									{item.titleInfo}
								</p>
								<p className='modalwindow__description'>
									{item.description}
								</p>
							</div>
							<div className='modalwindow__img'>
								<img src={arrImg[item.img]} alt='' />
							</div>
						</div>
					)
			})}
		</div>
	)
}
