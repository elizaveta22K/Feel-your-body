import React from 'react';
import TrainerLyda from './TrainerLyda';
import TrainerLera from './TrainerLera';

import LydaPhoto1 from '../../../img/photo/trainer/photo1.jpg';
import LydaPhoto2 from '../../../img/photo/trainer/photo2.jpg';
import LydaPhoto3 from '../../../img/photo/trainer/photo3.jpg';
import LeraPhoto1 from '../../../img/photo/trainer/photo4.jpg';
import LeraPhoto2 from '../../../img/photo/trainer/photo5.jpg';
import LeraPhoto3 from '../../../img/photo/trainer/photo6.jpg';
import instagram from '../../../img/instagram.svg';

import '../Trainer/trainer.css';

const Trainer = () => {
    const lydaData = {
        name: 'Люда',
        photos: [LydaPhoto1, LydaPhoto2, LydaPhoto3],
        info: [
            'Сертифікований тренер з фітнесу',
            'Понад 15 років в сфері фітнесу',
            'Нутриціолог, пройшла навчання у школі Здоров’я Толстікової',
            'Зробила щасливими понад 1000 дівчат, які досягли бажаних форм та позбулись лишніх кілограм',
            'Прививає любов до спорту та здорового тіла',
        ],
        instagramLink: 'https://www.instagram.com/lyudastrilyk/',
        instagramSvg: instagram,
    };

    const leraData = {
        name: 'Валерія',
        photos: [LeraPhoto1, LeraPhoto2, LeraPhoto3],
        info: [
            'Сертифікований тренер зі Stretching напрямів',
            'Успішно посадила на шпагат дівчат та жінок різного віку, допомогла розвинути гнучкість їхнього тіла',
            'Сертифікований тренер з Functional training',
            'Понад 3 роки щоденних тренувань з дівчатами',
            'Обирає вправи, які є не тільки ефективними, але і дуже корисними для вашого організму',
        ],
        instagramLink: 'https://www.instagram.com/lerysik27/',
        instagramSvg: instagram,
    };

    return (
        <div id='trainers' className='trainer'>
            <div className='container'>
                <div className='trainer__title tlt vetrino'>
                    <h2>Тренери</h2>
                </div>
                <div className='trainer__block'>
                    <TrainerLyda {...lydaData} />
                    <TrainerLera {...leraData} />
                </div>
            </div>
        </div>
    );
};

export default Trainer;
