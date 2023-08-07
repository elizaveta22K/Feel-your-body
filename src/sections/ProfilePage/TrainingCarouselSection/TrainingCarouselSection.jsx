import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import TrainingCarouselArrow from './components/TrainingCarouselArrow/TrainingCarouselArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO: review this
import '../../HomePage/TrainingSection/TrainingListSection.css';
import '../../HomePage/TrainingSection/carousel.css';

const TrainingCarouselSection = ({ filteredTrainingData }) => {
    const responsiveSettings = [
        {
            breakpoint: 2500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1110,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    return (
        <section id='training' className='training__carousel'>
            <div className='container'>
                <div className='training__title tlt vetrino'>
                    <h2>Інші тренування</h2>
                </div>
                <Slider
                    dots={false}
                    infinite={true}
                    speed={500}
                    prevArrow={<TrainingCarouselArrow direction='prev' />}
                    nextArrow={<TrainingCarouselArrow direction='next' />}
                    responsive={responsiveSettings}
                >
                    {Object.entries(filteredTrainingData).map(
                        ([trainingType, trainingData]) => (
                            // TODO: it makes sense to put it in ./components/TrainingCard/TrainingCard.jsx
                            <div className='carusel-block' key={trainingType}>
                                <div className='carusel-block__inf'>
                                    <div className='carusel-block__img'>
                                        <img
                                            className=''
                                            src={trainingData.src}
                                            alt={trainingData.alt}
                                        />
                                    </div>
                                    <div className='info-training__title vetrino'>
                                        {trainingData.title}
                                    </div>
                                    <div className='info-training__subtitle'>
                                        {trainingData.subtitle}
                                    </div>
                                </div>
                                <div className='carusel-block__button'>
                                    <a
                                        href={'#'}
                                        className='button-training__blu'
                                    >
                                        <span>Детальніше</span>
                                    </a>
                                </div>
                            </div>
                        )
                    )}
                </Slider>
            </div>
        </section>
    );
};

TrainingCarouselSection.propTypes = {
    filteredTrainingData: PropTypes.object.isRequired,
};

export default TrainingCarouselSection;
