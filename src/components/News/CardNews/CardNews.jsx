import React from 'react'
import newsImg from '../../../assets/img/news/news.png'

export default function CardNews({ item, index, setId, setActive }) {
	return (
		<>
			<div className='news__img'>
				<img src={newsImg} />
			</div>
			<div className='news__text'>
				<h4 className='news__card-title'>{item.title}</h4>
				<p className='news__card-description'>{item.description[0]}</p>
				<button
					className='news__more'
					data-id={index}
					onClick={() => {
						setActive(true)
						setId(index)
					}}
				>
					&rarr;
				</button>
			</div>
		</>
	)
}
{
	/* {item.description.map(item => (
					<p className='news__card-description'>{item}</p>
				))} */
}
