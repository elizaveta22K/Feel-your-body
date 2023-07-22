import React from 'react'

import '../Training/training.css'
import stretchingPhoto from '../../../img/photo/training/photo1.jpg'
import sexyPhoto from '../../../img/photo/training/photo2.jpg'
import kidsPhoto from '../../../img/photo/training/photo3.jpg'
import functionalPhoto from '../../../img/photo/training/photo4.jpg'
import healthyPhoto from '../../../img/photo/training/photo5.jpg'


export default function Training() {
	return (
		<div className='training'>
			<div className='container'>
				<div className='training__title tlt vetrino'>
					<h2>Тренування</h2>
				</div>
				<div className='training-block'>
					<div className='training-block__items items-training stretching'>
						<div className='items-training__img'>
							<img className='img-training' src={stretchingPhoto} alt='Photo'></img>
						</div>
						<div className='items-training__info info-training'>
							<div className='info-training__title vetrino'>Stretching</div>
							<div className='info-training__subtitle'>Ефективні тренування для розвитку гнучкості без шкоди для здоров‘я</div>
							<div className='info-training__picture picture-training'>
								<div className='picture-training__number1 picture-training__text'>8 тренувань</div>
								<div className='picture-training__time picture-training__text'>2 місяці доступу</div>
							</div>
							<div className='info-training__price vetrino'>600 грн</div>
							<div className='info-training__button button-training '>
								<div className='btn button-training__white'><a href=''>Купити</a></div>
								<div className='button-training__blu'><a href='' className=''>Детальніше</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className='training-block'>
					<div className='training-block__items items-training sexy'>
						<div className='items-training__img'>
							<img className='img-training' src={sexyPhoto} alt='Photo'></img>
						</div>
						<div className='items-training__info info-training'>
							<div className='info-training__title vetrino'>SEXY сідниці</div>
							<div className='info-training__subtitle'>Ефективні тренування від яких дійсно збільшуються сідниці!</div>
							<div className='info-training__picture picture-training'>
								<div className='picture-training__number2 picture-training__text'>8 тренувань</div>
								<div className='picture-training__time picture-training__text'>2 місяці доступу</div>
								<div className='picture-training__gift picture-training__text'>+ харчування в подарунок</div>
							</div>
							<div className='info-training__price vetrino'>600 грн</div>
							<div className='info-training__button button-training '>
								<div className='btn button-training__white'><a href=''>Купити</a></div>
								<div className='button-training__blu'><a href='' className=''>Детальніше</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className='training-block'>
					<div className='training-block__items items-training kids'>
						<div className='items-training__img'>
							<img className='img-training' src={kidsPhoto} alt='Photo'></img>
						</div>
						<div className='items-training__info info-training'>
							<div className='info-training__title vetrino'>Stretching KIDS</div>
							<div className='info-training__subtitle'>Тренування, яке включає в себе велику кількість різних вправ, що сприяють розвитку фізичних здібностей дитини</div>
							<div className='info-training__picture picture-training'>
								<div className='picture-training__number3 picture-training__text'>8 тренувань</div>
								<div className='picture-training__time picture-training__text'>2 місяці доступу</div>
							</div>
							<div className='info-training__price vetrino'>600 грн</div>
							<div className='info-training__button button-training '>
								<div className='btn button-training__white'><a href=''>Купити</a></div>
								<div className='button-training__blu'><a href='' className=''>Детальніше</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className='training-block'>
					<div className='training-block__items items-training functional'>
						<div className='items-training__img'>
							<img className='img-training' src={functionalPhoto} alt='Photo'></img>
						</div>
						<div className='items-training__info info-training'>
							<div className='info-training__title vetrino'>Functional training</div>
							<div className='info-training__subtitle'>Інтенсивне функціональне тренування, що подарує вам бажаний результат!</div>
							<div className='info-training__picture picture-training'>
								<div className='picture-training__number4 picture-training__text'>8 тренувань</div>
								<div className='picture-training__time picture-training__text'>2 місяці доступу</div>
							</div>
							<div className='info-training__price vetrino'>600 грн</div>
							<div className='info-training__button button-training '>
								<div className='btn button-training__white'><a href=''>Купити</a></div>
								<div className='button-training__blu'><a href='' className=''>Детальніше</a></div>
							</div>
						</div>
					</div>
				</div>
				<div className='training-block'>
					<div className='training-block__items items-training healthy'>
						<div className='items-training__img'>
							<img className='img-training' src={healthyPhoto} alt='Photo'></img>
						</div>
						<div className='items-training__info info-training'>
							<div className='info-training__title vetrino'>Healthy раціон</div>
							<div className='info-training__subtitle'>Стереотип «Збалансоване харчування дороге» - це справжній міф. Наш Раціон харчування побудований на основі простих та доступних кожному продуктів!</div>
							<div className='info-training__picture picture-training'>
								<div className='picture-training__time picture-training__text'>Раціон на 21 день</div>
							</div>
							<div className='info-training__price vetrino'>400 грн</div>
							<div className='info-training__button button-training '>
								<div className='btn button-training__white'><a href=''>Купити</a></div>
								<div className='button-training__blu'><a href='' className=''>Детальніше</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
