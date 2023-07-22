import React from 'react'

import '../Trainer/trainer.css'
import LydaPhoto1 from '../../../img/photo/trainer/photo1.jpg'
import LydaPhoto2 from '../../../img/photo/trainer/photo2.jpg'
import LydaPhoto3 from '../../../img/photo/trainer/photo3.jpg'
import LeraPhoto1 from '../../../img/photo/trainer/photo4.jpg'
import LeraPhoto2 from '../../../img/photo/trainer/photo5.jpg'
import LeraPhoto3 from '../../../img/photo/trainer/photo6.jpg'
import instagram from '../../../img/instagram.svg'

export default function Trainer() {
  return (
	 <div className='trainer'>
		<div className='container'>
			<div className='trainer__title tlt vetrino'>
					<h2>Тренери</h2>
			</div>
			<div className='trainer__block'>
				<div className='block-main__Lyda'>
					<div className='block-main__items_Lyda'>
						<div className='item__img1'>
							<img src={LydaPhoto1} alt='Photo'></img>
						</div>
						<div className='item__info info-item_Lyda'>
							<div className='info-item__title vetrino'>Люда</div>
							<div className='info-item__text'>
								<ul className='info-item__text_item'>
									<li>Сертифікований тренер з фітнесу</li>
									<li>Понад 15 років в сфері фітнесу</li>
									<li>Нутриціолог, пройшла навчання у школі Здоров’я Толстікової</li>
									<li>Зробила щасливими понад 1000дівчат, які досягли бажаних форм та позбулись лишніх кілограм</li>
									<li>Прививаю любов до спорту та здорового тіла</li>
								</ul>
							</div>
							<div className='info-item__inst'>
								<a href='https://www.instagram.com/lyudastrilyk/'><img src={instagram} alt='Instagram'></img></a>
							</div>
						</div>
						<div className='item__img2'>
							<img src={LydaPhoto2} alt='Photo'></img>
						</div>
						<div className='item__img3'>
							<img src={LydaPhoto3} alt='Photo'></img>
						</div>
					</div>
				</div>
				<div className='block-main__Lera'>
					<div className='block-main__items_Lera'>
						<div className='item__info info-item_Lera'>
							<div className='info-item__title vetrino'>Валерія</div>
							<div className='info-item__text'>
								<ul className='info-item__text_item'>
									<li>Сертифікований тренер зі Stretching напрямів</li>
									<li>Успішно посадила на шпагата дівчат та жінок різного віку,допомогла розвинути гнучкість їхнього тіла</li>
									<li>Сертифікований тренер з Functional training</li>
									<li>Понад 3 роки щоденних тренувань з дівчатами</li>
									<li>Обираю вправи, які є не тільки ефективними але і дуже корисними для вашого організму</li>
								</ul>
							</div>
							<div className='info-item__inst'>
								<a href='https://www.instagram.com/lerysik27/'><img src={instagram} alt='Instagram'></img></a>
							</div>
						</div>
						<div className='item__img4'>
							<img src={LeraPhoto1} alt='Photo'></img>
						</div>
						<div className='item__img5'>
							<img src={LeraPhoto2} alt='Photo'></img>
						</div>
						<div className='item__img6'>
							<img src={LeraPhoto3} alt='Photo'></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	 </div>
  )
}
