import React from 'react'

import './headerMain.css'
import photo1 from '../../../img/photo/photo1.png'
import photo2 from '../../../img/photo/photo2.jpg'

export default function HeaderMain() {
  return (
	<div className='main'>
		<div className='container'>
			<div className='main-block'>
				<div className='main-block__text'>
					<div className='title-main_up vetrino'>Тренування в повному записі,</div>
					<div className='title-main_down vetrino'>вмикай та повторюй!</div>
					<div className='text-main__button btn'>
						<a href=''>Обрати тренування</a>
					</div>
				</div>
				<div className='main-block__img'>
					<img className='main-block__img1' src={photo1} alt='Photo'></img>
					<img className='main-block__img2' src={photo2} alt='Photo'></img>
				</div>
			</div>
		</div>
	 </div>
	 
  )
}
