import React from 'react';
import '../Training/training.css';
import healthyPhoto from '../../../img/photo/training/photo5.jpg';

export default function HealthyRacion() {
    return (
        <div className='training-block'>
            <div className='training-block__items items-training healthy'>
                <div className='items-training__img'>
                    <img
                        className='img-training'
                        src={healthyPhoto}
                        alt='Photo'
                    ></img>
                </div>
                <div className='items-training__info info-training'>
                    <div className='info-training__title vetrino'>
                        Healthy раціон
                    </div>
                    <div className='info-training__subtitle'>
                        Стереотип «Збалансоване харчування дороге» - це
                        справжній міф. Наш Раціон харчування побудований на
                        основі простих та доступних кожному продуктів!
                    </div>
                    <div className='info-training__picture picture-training'>
                        <div className='picture-training__time picture-training__text'>
                            Раціон на 21 день
                        </div>
                    </div>
                    <div className='info-training__price vetrino'>400 грн</div>
                    <div className='info-training__button button-training '>
                        <div className='btn button-training__white'>
                            <a href=''>Купити</a>
                        </div>
                        <div className=''>
                            <a href='' className='button-training__blu'>
                                <span>Детальніше</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
