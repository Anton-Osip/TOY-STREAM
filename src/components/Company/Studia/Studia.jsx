import React from 'react'
import cup from '../../../assets/img/about/compony/cup.png'
import flag from '../../../assets/img/about/compony/flag.png'
import mount from '../../../assets/img/about/compony/mount.png'
import star from '../../../assets/img/about/compony/star.png'

export default function Studia({ language, chengLanguage, switchs }) {
	return (
		<div className={switchs === 'team' ? 'undisplay' : 'studio'}>
			<div className='container'>
				<div className='studio__bg'></div>
				<div className='row'>
					<div className='col-lg-8 studio__info'>
						<h1 className='studio__title'>
							{language[chengLanguage].compony.studia.title}
						</h1>
						<p className='studio__description'>
							{
								language[chengLanguage].compony.studia
									.description[0]
							}
						</p>
						<p className='studio__description'>
							{
								language[chengLanguage].compony.studia
									.description[1]
							}
						</p>
						<p className='studio__description'>
							{
								language[chengLanguage].compony.studia
									.description[2]
							}
						</p>
					</div>
					<div className='col-lg-11 studio__cards'>
						<div className='studio__card'>
							<div className='card__img'>
								<img src={flag} />
							</div>
							<h3 className='card__title'>
								{
									language[chengLanguage].compony.studia
										.cards[0].totall
								}
							</h3>
							<p className='card__description'>
								{
									language[chengLanguage].compony.studia
										.cards[0].description
								}
							</p>
						</div>
						<div className='studio__card'>
							<div className='card__img'>
								<img src={mount} />
							</div>
							<h3 className='card__title'>
								{
									language[chengLanguage].compony.studia
										.cards[1].totall
								}
							</h3>
							<p className='card__description'>
								{
									language[chengLanguage].compony.studia
										.cards[1].description
								}
							</p>
						</div>
						<div className='studio__card'>
							<div className='card__img'>
								<img src={cup} />
							</div>
							<h3 className='card__title'>
								{
									language[chengLanguage].compony.studia
										.cards[2].totall
								}
							</h3>
							<p className='card__description'>
								{
									language[chengLanguage].compony.studia
										.cards[2].description
								}
							</p>
						</div>
						<div className='studio__card'>
							<div className='card__img'>
								<img src={star} />
							</div>
							<h3 className='card__title'>
								{
									language[chengLanguage].compony.studia
										.cards[3].totall
								}
							</h3>
							<p className='card__description'>
								{
									language[chengLanguage].compony.studia
										.cards[3].description
								}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
