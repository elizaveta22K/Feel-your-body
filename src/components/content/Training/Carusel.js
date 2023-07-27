import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import healthyPhoto from '../../../img/photo/training/photo5.jpg';
import './training.css';
import './carusel.css';


import reviewsArrow from '../../../img/components/icon6.png';

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

export default function Carusel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <div id='training' className='training'>
            <div className='container'>
                <div className='training__title tlt vetrino'>
                    <h2>Інші тренування</h2>
                </div>
                <Slider {...settings}>
                    <div className='carusel-block'>
                        <div className='carusel-block__img'>
                            <img
                                className=''
                                src={healthyPhoto}
                                alt='Photo'
                            ></img>
                        </div>
                        <div className='info-training__title vetrino'>
                            Healthy раціон
                        </div>
                        <div className='info-training__subtitle'>
                            Стереотип «Збалансоване харчування дороге» - це
                            справжній міф. Наш Раціон харчування побудований на
                            основі простих та доступних кожному продуктів!
                        </div>
                        <div className=''>
                            <a href='' className='button-training__blu'>
									 <span>Детальніше</span>
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}
