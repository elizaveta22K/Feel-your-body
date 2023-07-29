import React, { useState } from 'react';

import VideoTrainings from '../content/Training/ VideoTranings';
import Carusel from '../content/Training/Carusel';

import './userAccount.css';

import healthyPhoto from '../../img/photo/training/photo5.jpg';
import sexyPhoto from '../../img/photo/training/photo2.jpg';
import functionalPhoto from '../../img/photo/training/photo4.jpg';
import stretchingPhoto from '../../img/photo/training/photo1.jpg';
import kidsPhoto from '../../img/photo/training/photo3.jpg';

export default function UserAccount() {
    const carouselData = [
        {
            src: healthyPhoto,
            alt: 'Photo',
            title: 'Healthy раціон',
            subtitle:
                'Стереотип «Збалансоване харчування дороге» - це справжній міф. Наш Раціон харчування побудований на основі простих та доступних кожному продуктів!',
            href: '',
            video: ['video_url_Healthy_1.mp4'],
        },
        {
            src: sexyPhoto,
            alt: 'Photo',
            title: 'SEXY сідниці',
            subtitle:
                'Тренуємось та створюємо омріяні пружні сідниці та здорове тіло!',
            href: '',
            video: ['video_url_SEXY_1.mp4', 'video_url_SEXY_2.mp4'],
        },
        {
            src: functionalPhoto,
            alt: 'Photo',
            title: 'Functional training',
            subtitle:
                'Інтенсивне функціональне тренування, що подарує вам бажаний результат!',
            href: '',
            video: [
                'video_url_Functional_1.mp4',
                'video_url_Functional_2.mp4',
                'video_url_Functional_3.mp4',
            ],
        },
        {
            src: stretchingPhoto,
            alt: 'Photo',
            title: 'Stretching',
            subtitle:
                'Ефективні тренування для розвитку гнучкості без шкоди для здоров‘я',
            href: '',
            video: [
                'video_url_Stretching_1.mp4',
                'video_url_Stretching_2.mp4',
                'video_url_Stretching_3.mp4',
                'video_url_Stretching_4.mp4',
            ],
        },
        {
            src: kidsPhoto,
            alt: 'Photo',
            title: 'Stretching KIDS',
            subtitle:
                'Тренування, яке включає в себе велику кількість різних вправ, що сприяють розвитку фізичних здібностей дитини',
            href: '',
            video: [
                'video_url_KIDS_1.mp4',
                'video_url_KIDS_2.mp4',
                'video_url_KIDS_3.mp4',
                'video_url_KIDS_4.mp4',
                'video_url_KIDS_5.mp4',
                'video_url_KIDS_6.mp4',
                'video_url_KIDS_7.mp4',
                'video_url_KIDS_8.mp4',
            ],
        },
    ];

    const [selectedOption, setSelectedOption] = useState('Healthy раціон');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // Filter carouselData based on the selected option
    const filteredCarouselData = selectedOption
        ? carouselData.filter((item) => item.title !== selectedOption)
        : carouselData;

    return (
        <>
            <div className='userAccount'>
                {/* Place any other components related to user account here */}
            </div>
            <VideoTrainings
                props={carouselData}
                selectedOption={selectedOption}
                onSelectChange={handleSelectChange}
            />
            <Carusel props={filteredCarouselData} />
        </>
    );
}
