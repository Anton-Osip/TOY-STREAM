import React, { useState, useEffect } from 'react'
import Sherman from '../../../assets/img/about/team/people.png'

export default function Team({ language, chengLanguage, switchs }) {
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
			document.querySelector('.team__bottom').clientWidth / 412
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
		<div className={switchs === 'studia' ? ' team undisplay ' : 'team'}>
			<div className='container'>
				<div className='team__bg'></div>
				<div className='team__top'>
					<h3 className='team__title'>
						{language[chengLanguage].compony.team.title}
					</h3>
					<div className='team__slider-btns'>
						<button
							onClick={() => {
								shiftNext()
							}}
							disabled={!nextSlid}
							className={
								nextSlid
									? 'team__slider-btn--prev team__slider-btn--prev--active'
									: 'team__slider-btn--prev'
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
									? 'team__slider-btn--prev team__slider-btn--prev--active'
									: 'team__slider-btn--prev'
							}
						>
							&rarr;
						</button>
					</div>
				</div>
				<div className='team__bottom'>
					<div className='team__slider' style={shiftSlider}>
						{language[chengLanguage].compony.team.cards.map(
							(item, index) => (
								<div className='card' key={index}>
									<div className='card__photo'>
										<img src={Sherman} />
									</div>
									<h4 className='card__name'>{item.name}</h4>
									<p className='card__profession'>
										{item.profession}
									</p>
									<p className='card__quote'>{item.quote}</p>
									<p className='card__words'>{item.words}</p>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
