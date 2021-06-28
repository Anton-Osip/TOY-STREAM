import React from 'react'
import uuid from 'react-uuid'

import newsImg from '../../../assets/img/news/news.png'

export default function NewsItem({
	language,
	chengLanguage,
	setActive,
	id,
	active,
}) {
	return language[chengLanguage].news.cards.map((item, index) => {
		if (index == id) {
			return (
				<div
					key={uuid}
					className={
						active ? 'container' : 'container cards__unvisbil'
					}
				>
					<button
						className='NewsItem__btn btn '
						onClick={() => {
							setActive(false)
						}}
					>
						<div className='NewsItem__btn-text'>
							{language[chengLanguage].news.return}
						</div>
						<div className='NewsItem__btn-arrow'>&larr;</div>
					</button>
					<h2 className='NewsItem__title'>{item.title}</h2>
					<div className='NewsItem__img'>
						<img src={newsImg} alt='' />
					</div>

					{item.description.map(item => (
						<p className='NewsItem__description' key={uuid()}>
							{item}
						</p>
					))}
				</div>
			)
		}
	})
}
