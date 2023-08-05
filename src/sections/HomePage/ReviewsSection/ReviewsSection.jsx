import React from 'react';
import Slider from 'react-slick';

import ReviewsCarouselArrow from './components/ReviewsCarouselArrow/ReviewsCarouselArrow';

import { MOCKED_REVIEWS_PHOTOS } from './constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './ReviewsSection.css';

import ReviewsAnimateHeight from './components/ReviewsCarouselArrow/ReviewsAnimateHeight';

const ReviewsSection = () => {
  return (
    <div className='reviews'>
      <div className='container'>
        <div className='whom__title tlt vetrino'>
          <h2>Відгуки</h2>
        </div>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={2}
          slidesToScroll={1}
          prevArrow={<ReviewsCarouselArrow direction='prev' />}
          nextArrow={<ReviewsCarouselArrow direction='next' />}
        >
          {MOCKED_REVIEWS_PHOTOS.map((photo, index) => (
            <div className='slider-block' key={index}>
              <div className='slider-block__img'>
                <img src={photo} alt={`Review ${index + 1}`} />
              </div>
              <ReviewsAnimateHeight index={index} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewsSection;
