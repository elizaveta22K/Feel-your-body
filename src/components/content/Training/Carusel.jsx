import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

export default function Carusel(props) {
    const { props: carouselData } = props;

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
                    {carouselData.map((item, index) => (
                        <div className='carusel-block' key={index}>
                            <div className='carusel-block__img'>
                                <img
                                    className=''
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </div>
                            <div className='info-training__title vetrino'>
                                {item.title}
                            </div>
                            <div className='info-training__subtitle'>
                                {item.subtitle}
                            </div>
                            <div className=''>
                                <a
                                    href={item.href}
                                    className='button-training__blu'
                                >
                                    <span>Детальніше</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
