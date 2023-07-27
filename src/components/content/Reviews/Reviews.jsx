import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import '../Reviews/reviews.css';

import reviewsPhoto1 from '../../../img/photo/reviews/photo1.jpg';
import reviewsPhoto2 from '../../../img/photo/reviews/photo2.jpg';
import reviewsPhoto3 from '../../../img/photo/reviews/photo3.jpg';
import reviewsPhoto4 from '../../../img/photo/reviews/photo4.jpg';
import reviewsPhoto5 from '../../../img/photo/reviews/photo5.jpg';
import reviewsPhoto6 from '../../../img/photo/reviews/photo6.jpg';
import reviewsPhoto7 from '../../../img/photo/reviews/photo7.jpg';
import reviewsPhoto8 from '../../../img/photo/reviews/photo8.jpg';
import reviewsPhoto9 from '../../../img/photo/reviews/photo9.jpg';
import reviewsPhoto10 from '../../../img/photo/reviews/photo10.jpg';
import reviewsPhoto11 from '../../../img/photo/reviews/photo11.jpg';
import reviewsPhoto12 from '../../../img/photo/reviews/photo12.jpg';
import reviewsPhoto13 from '../../../img/photo/reviews/photo13.jpg';
import reviewsPhoto14 from '../../../img/photo/reviews/photo14.jpg';
import reviewsPhoto15 from '../../../img/photo/reviews/photo15.jpg';
import reviewsPhoto16 from '../../../img/photo/reviews/photo16.jpg';
import reviewsArrow from '../../../img/components/icon4.png';
import reviewsIconArrow from '../../../img/components/icon5.png';

const reviewPhotos = [
    reviewsPhoto1,
    reviewsPhoto2,
    reviewsPhoto3,
    reviewsPhoto4,
    reviewsPhoto5,
    reviewsPhoto6,
    reviewsPhoto7,
    reviewsPhoto8,
    reviewsPhoto9,
    reviewsPhoto10,
    reviewsPhoto11,
    reviewsPhoto12,
    reviewsPhoto13,
    reviewsPhoto14,
    reviewsPhoto15,
    reviewsPhoto16,
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            src={reviewsArrow}
            alt='Next Arrow'
            style={{
                ...style,
                display: 'block',
                width: 'auto',
                height: 'auto',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            src={reviewsArrow}
            alt='Previous Arrow'
            style={{
                ...style,
                display: 'block',
                width: 'auto',
                height: 'auto',
                transform: 'rotate(180deg)',
            }}
            onClick={onClick}
        />
    );
}

export default function Reviews() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className='reviews'>
            <div className='container'>
                <div className='whom__title tlt vetrino'>
                    <h2>Відгуки</h2>
                </div>
                <Slider {...settings}>
                    {reviewPhotos.map((photo, index) => (
                        <div className='slider-block' key={index}>
                            <div className='slider-block__img'>
                                <img
                                    src={photo}
                                    alt={`Review ${index + 1}`}
                                ></img>
                            </div>
                            <div className='slider-block__detal detal-spoiler'>
                                <div className='detal-spoiler__text'>
                                    Переглянути фото “До” та “Після”
                                </div>
                                <div className='detal-spoiler__img'>
                                    <img
                                        src={reviewsIconArrow}
                                        alt={`Arrow ${index + 1}`}
                                    ></img>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
