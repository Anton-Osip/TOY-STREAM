import React, { useState } from 'react'
import uuid from 'react-uuid'

import CardNews from './CardNews/CardNews.jsx'
import NewsItem from './NewsItem/NewsItem.jsx'

export default function News({ language, chengLanguage }) {
	const [id, setId] = useState(0)
	const [active, setActive] = useState(false)
	const showBtnUp = () => {
		window.scrollTo(0, 0)
	}

	return (
		<div className='news'>
			<div className='container'>
				<div className='news__title'>
					{language[chengLanguage].news.title}
				</div>
				<div
					className={
						active ? 'news__cards cards__unvisbil' : 'news__cards '
					}
				>
					{language[chengLanguage].news.cards.map((item, index) => (
						<div className='news__card' key={uuid()}>
							<CardNews
								item={item}
								index={index}
								setId={setId}
								setActive={setActive}
							/>
						</div>
					))}
				</div>
			</div>
			<button className='news__btn-up ' onClick={() => showBtnUp()}>
				{language[chengLanguage].news.btn}
			</button>
			<NewsItem
				language={language}
				chengLanguage={chengLanguage}
				setActive={setActive}
				id={id}
				active={active}
			/>
		</div>
	)
}
