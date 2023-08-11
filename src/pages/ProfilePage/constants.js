import healthyPhoto from '../../img/photo/trainings/photo5.jpg';
import sexyPhoto from '../../img/photo/trainings/photo2.jpg';
import functionalPhoto from '../../img/photo/trainings/photo4.jpg';
import stretchingPhoto from '../../img/photo/trainings/photo1.jpg';
import kidsPhoto from '../../img/photo/trainings/photo3.jpg';

export const MOCKED_TRAININGS_TYPES = {
    healthy_diet: 'healthy_diet',
    sexy_buttocks: 'sexy_buttocks',
    functional_training: 'functional_training',
    stretching: 'stretching',
    stretching_kids: 'stretching_kids',
};

export const MOCKED_TRAININGS_DATA = {
    [MOCKED_TRAININGS_TYPES.healthy_diet]: {
        src: healthyPhoto,
        alt: 'Photo',
        title: 'Healthy раціон',
        subtitle:
            'Стереотип «Збалансоване харчування дороге» - це справжній міф. Наш Раціон харчування побудований на основі простих та доступних кожному продуктів!',
        videos: ['video_url_Healthy_1.mp4'],
    },
    [MOCKED_TRAININGS_TYPES.sexy_buttocks]: {
        src: sexyPhoto,
        alt: 'Photo',
        title: 'SEXY сідниці',
        subtitle:
            'Тренуємось та створюємо омріяні пружні сідниці та здорове тіло!',

        videos: [
            'video_url_SEXY_1.mp4',
            'video_url_SEXY_2.mp4',
            'video_url_SEXY_3.mp4',
            'video_url_SEXY_4.mp4',
            'video_url_SEXY_5.mp4',
            'video_url_SEXY_6.mp4',
            'video_url_SEXY_7.mp4',
            'video_url_SEXY_8.mp4',
        ],
    },
    [MOCKED_TRAININGS_TYPES.functional_training]: {
        src: functionalPhoto,
        alt: 'Photo',
        title: 'Functional training',
        subtitle:
            'Інтенсивне функціональне тренування, що подарує вам бажаний результат!',
        videos: [
            'video_url_Functional_1.mp4',
            'video_url_Functional_2.mp4',
            'video_url_Functional_3.mp4',
            'video_url_Functional_4.mp4',
            'video_url_Functional_5.mp4',
            'video_url_Functional_6.mp4',
        ],
    },
    [MOCKED_TRAININGS_TYPES.stretching]: {
        src: stretchingPhoto,
        alt: 'Photo',
        title: 'Stretching',
        subtitle:
            'Ефективні тренування для розвитку гнучкості без шкоди для здоров‘я',
        videos: [
            'video_url_Stretching_1.mp4',
            'video_url_Stretching_2.mp4',
            'video_url_Stretching_3.mp4',
            'video_url_Stretching_4.mp4',
            'video_url_Stretching_5.mp4',
            'video_url_Stretching_6.mp4',
            'video_url_Stretching_7.mp4',
            'video_url_Stretching_8.mp4',
        ],
    },
    [MOCKED_TRAININGS_TYPES.stretching_kids]: {
        src: kidsPhoto,
        alt: 'Photo',
        title: 'Stretching KIDS',
        subtitle:
            'Тренування, яке включає в себе велику кількість різних вправ, що сприяють розвитку фізичних здібностей дитини',
        videos: [
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
};
