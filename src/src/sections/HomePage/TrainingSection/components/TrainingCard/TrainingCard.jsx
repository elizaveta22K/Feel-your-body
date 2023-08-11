import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/Button/Button';

const TrainingCard = ({
    title,
    subtitle,
    photo,
    numerosity,
    time,
    gift,
    price,
    className,
}) => (
    <div className='training-block'>
        <div className={`training-block__items items-training ${className}`}>
            <div className='items-training__img'>
                <img className='img-training' src={photo} />
            </div>
            <div className='items-training__info info-training'>
                <div className='info-training__title vetrino'>{title}</div>
                <div className='info-training__subtitle'>{subtitle}</div>
                <div className='info-training__picture picture-training'>
                    {numerosity && (
                        <div className='picture-training__number1 picture-training__text'>
                            {numerosity}
                        </div>
                    )}
                    {time && (
                        <div className='picture-training__time picture-training__text'>
                            {time}
                        </div>
                    )}
                    {gift && (
                        <div className='picture-training__gift picture-training__text'>
                            {gift}
                        </div>
                    )}
                </div>
                <div className='info-training__price vetrino'>{price}</div>
                <div className='info-training__button button-training'>
                    <div className='btn button-training__white'>
                        <Button>{'Купити'}</Button>
                    </div>
                    <div className='button-training_blu'>
                        <Button className='button-training__blu'>
                            {'Детальніше'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

TrainingCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
	 numerosity: PropTypes.string,
    time: PropTypes.string,
	 gift: PropTypes.string,
    price: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default TrainingCard;