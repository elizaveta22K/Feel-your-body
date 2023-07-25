import React from 'react';
import '../Training/training.css';
import Stretching from './Stretching';
import SexyBack from './SexyBack';
import StretchingKids from './StretchingKids';
import FunctionalTraining from './FunctionalTraining';
import HealthyRacion from './HealthyRacion';

export default function Training() {
    return (
        <div id='training' className='training'>
            <div className='container'>
                <div className='training__title tlt vetrino'>
                    <h2>Тренування</h2>
                </div>
                <Stretching />
                <SexyBack />
                <StretchingKids />
                <FunctionalTraining />
                <HealthyRacion />
            </div>
        </div>
    );
}
