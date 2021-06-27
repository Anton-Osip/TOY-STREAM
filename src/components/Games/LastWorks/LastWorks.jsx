import React, { useState, useEffect } from 'react'
import img1 from '../../../assets/img/games/projects/projects1.png'
import img2 from '../../../assets/img/games/projects/projects2.png'
import img3 from '../../../assets/img/games/projects/projects3.png'
import img4 from '../../../assets/img/games/projects/projects4.png'

export default function LastWorks({ language, chengLanguage, switchs }) {
	const arrImg = [img1, img2, img3, img4]

	const [slider, setSlider] = useState(0)
	const [prevSlid, setPrevSlid] = useState(true)
	const [nextSlid, setNextSlid] = useState(false)
	const shiftSlider = {
		transform: ` translateX(${slider}px)`,
	}
	function shiftPrev() {
		const count = slider - 412
		setSlider(count)
		const countCard = Math.floor(
			document.querySelector('.LastWorks__bottom').clientWidth / 412
		)
		const transform =
			(language[chengLanguage].compony.team.cards.length -
				1 -
				countCard) *
			-412

		setPrevSlid(slider != transform ? true : false)
		setNextSlid(true)
	}
	function shiftNext() {
		const count = slider + 412
		setSlider(count)
		setNextSlid(slider != -412 ? true : false)
		setPrevSlid(true)
	}
	return (
		<div
			className={
				switchs === 'LastWorks' ? 'LastWorks' : ' LastWorks undisplay '
			}
		>
			<div className='container'>
				<div className='LastWorks__top'>
					<h3 className='LastWorks__title'>
						{language[chengLanguage].games.lastWorks.title}
					</h3>
					<div className='LastWorks__slider-btns'>
						<button
							onClick={() => {
								shiftNext()
							}}
							disabled={!nextSlid}
							className={
								nextSlid
									? 'LastWorks__slider-btn--prev LastWorks__slider-btn--prev--active'
									: 'LastWorks__slider-btn--prev'
							}
						>
							&larr;
						</button>
						<button
							onClick={() => {
								shiftPrev()
							}}
							disabled={!prevSlid}
							className={
								prevSlid
									? 'LastWorks__slider-btn--prev LastWorks__slider-btn--prev--active'
									: 'LastWorks__slider-btn--prev'
							}
						>
							&rarr;
						</button>
					</div>
				</div>
				<div className='LastWorks__bottom'>
					<div className='LastWorks__slider' style={shiftSlider}>
						{language[chengLanguage].games.ourWork.map(
							(item, index) => (
								<div className='LastWorks-card' key={index}>
									<div className='LastWorks-card__photo'>
										<img src={arrImg[item.img]} alt='' />
									</div>
									<h4 className='LastWorks-card__name'>
										{item.title}
									</h4>

									<p className='LastWorks-card__description'>
										{item.description}
									</p>
									<button className='LastWorks__btn btn'>
										<span className='LastWorks-btn__text'>
											{item.btnText}
										</span>
										<span className='LastWorks-btn__arrow'>
											&darr;
										</span>
									</button>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
