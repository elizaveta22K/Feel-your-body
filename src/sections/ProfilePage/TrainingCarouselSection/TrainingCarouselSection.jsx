import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import TrainingCarouselArrow from './components/TrainingCarouselArrow/TrainingCarouselArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// TODO: review this
import '../../HomePage/TrainingSection/TrainingListSection.css';
import '../../HomePage/TrainingSection/carousel.css';

const TrainingCarouselSection = ({ filteredTrainingData }) => (
    <section id='training' className='training__carousel'>
        <div className='container'>
            <div className='training__title tlt vetrino'>
                <h2>Інші тренування</h2>
            </div>
            <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                prevArrow={<TrainingCarouselArrow direction='prev' />}
                nextArrow={<TrainingCarouselArrow direction='next' />}
            >
                {Object.entries(filteredTrainingData).map(
                    ([trainingType, trainingData]) => (
                        // TODO: it makes sense to put it in ./components/TrainingCard/TrainingCard.jsx
                        <div className='carusel-block' key={trainingType}>
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
                            <div className=''>
                                <a href={'#'} className='button-training__blu'>
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

TrainingCarouselSection.propTypes = {
    filteredTrainingData: PropTypes.object.isRequired,
};

export default TrainingCarouselSection;
