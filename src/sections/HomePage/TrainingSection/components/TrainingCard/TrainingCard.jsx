import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../../components/Button/Button';

const TrainingCard = ({ title, subtitle, photo, time, price, className }) => (
    <div className='training-block'>
        <div className={`training-block__items items-training ${className}`}>
            <div className='items-training__img'>
                <img className='img-training' src={photo} />
            </div>
            <div className='items-training__info info-training'>
                <div className='info-training__title vetrino'>{title}</div>
                <div className='info-training__subtitle'>{subtitle}</div>
                <div className='info-training__picture picture-training'>
                    {time && (
                        <div className='picture-training__time picture-training__text'>
                            {time}
                        </div>
                    )}
                </div>
                <div className='info-training__price vetrino'>{price}</div>
                <div className='info-training__button button-training'>
                    <div className='btn button-training__white'>
                        <Button>{'Купити'}</Button>
                    </div>
                    <div>
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
    time: PropTypes.string,
    price: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default TrainingCard;
