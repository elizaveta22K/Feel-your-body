import React, {useState} from 'react'

import '../Reviews/reviews.css'
import reviewsPhoto1 from '../../../img/photo/reviews/photo1.jpg'
import reviewsPhoto2 from '../../../img/photo/reviews/photo2.jpg'
import reviewsPhoto3 from '../../../img/photo/reviews/photo3.jpg'
import reviewsPhoto4 from '../../../img/photo/reviews/photo4.jpg'
import reviewsPhoto5 from '../../../img/photo/reviews/photo5.jpg'
import reviewsPhoto6 from '../../../img/photo/reviews/photo6.jpg'
import reviewsPhoto7 from '../../../img/photo/reviews/photo7.jpg'
import reviewsPhoto8 from '../../../img/photo/reviews/photo8.jpg'
import reviewsPhoto9 from '../../../img/photo/reviews/photo9.jpg'
import reviewsPhoto10 from '../../../img/photo/reviews/photo10.jpg'
import reviewsPhoto11 from '../../../img/photo/reviews/photo11.jpg'
import reviewsPhoto12 from '../../../img/photo/reviews/photo12.jpg'
import reviewsPhoto13 from '../../../img/photo/reviews/photo13.jpg'
import reviewsPhoto14 from '../../../img/photo/reviews/photo14.jpg'
import reviewsPhoto15 from '../../../img/photo/reviews/photo15.jpg'
import reviewsPhoto16 from '../../../img/photo/reviews/photo16.jpg'
import reviewsArrow from '../../../img/components/icon4.png'
import reviewsIconArrow from '../../../img/components/icon5.png'

export default function Reviews() {
	const sliderBlocks = [
	  <div className='slider-block'>
		 <div className='slider-block__img'>
			<img src={reviewsPhoto1} alt='Reviews' />
		 </div>
		 <div className='slider-block__detal detal-spoiler'>
			<div className='detal-spoiler__text'>Переглянути фото “До” та “Після”</div>
			<div className='detal-spoiler__img'>
			  <img src={reviewsIconArrow} alt='Arrow' />
			</div>
		 </div>
	  </div>,
	  <div className='slider-block'>
		 <div className='slider-block__img'>
			<img src={reviewsPhoto2} alt='Reviews' />
		 </div>
		 <div className='slider-block__detal detal-spoiler'>
			<div className='detal-spoiler__text'>Переглянути фото “До” та “Після”</div>
			<div className='detal-spoiler__img'>
			  <img src={reviewsIconArrow} alt='Arrow' />
			</div>
		 </div>
	  </div>,
	  <div className='slider-block'>
		 <div className='slider-block__img'>
			<img src={reviewsPhoto3} alt='Reviews' />
		 </div>
		 <div className='slider-block__detal detal-spoiler'>
			<div className='detal-spoiler__text'>Переглянути фото “До” та “Після”</div>
			<div className='detal-spoiler__img'>
			  <img src={reviewsIconArrow} alt='Arrow' />
			</div>
		 </div>
	  </div>,
	  <div className='slider-block'>
		<div className='slider-block__img'>
			<img src={reviewsPhoto4} alt='Reviews' />
		</div>
		<div className='slider-block__detal detal-spoiler'>
			<div className='detal-spoiler__text'>Переглянути фото “До” та “Після”</div>
			<div className='detal-spoiler__img'>
				<img src={reviewsIconArrow} alt='Arrow' />
			</div>
		</div>
	</div>,
	];
 
	const [activeSlide, setActiveSlide] = useState(0);
 
	const handleNextSlide = () => {
	  setActiveSlide((prevSlide) => (prevSlide + 1) % sliderBlocks.length);
	};
 
	const handlePrevSlide = () => {
	  setActiveSlide((prevSlide) => (prevSlide - 1 + sliderBlocks.length) % sliderBlocks.length);
	};
 
	return (
	  <div className='reviews'>
		 <div className='container'>
			<div className='whom__title tlt vetrino'>
			  <h2>Відгуки</h2>
			</div>
			<div className='reviews__slider'>
			  {sliderBlocks.map((sliderBlock, index) => (
				 <div key={index} className={`slider-block ${index === activeSlide ? 'active' : ''}`}>
					{sliderBlock}
				 </div>
			  ))}
			  <div className='slider-block__button_next'>
				 <a onClick={handleNextSlide}>
					<img src={reviewsArrow} alt='Next' />
				 </a>
			  </div>
			  <div className='slider-block__button_previes'>
				 <a onClick={handlePrevSlide}>
					<img src={reviewsArrow} alt='Previous' />
				 </a>
			  </div>
			</div>
		 </div>
	  </div>
	);
 }