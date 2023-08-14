import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Select from '../../../components/Select/Select';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import Button from '../../../components/Button/Button';
import styles from './VideoTrainingsSection.module.css';

import {
    MOCKED_TRAININGS_DATA,
    MOCKED_TRAININGS_TYPES,
} from '../../../pages/ProfilePage/constants';

const VideoTrainingsSection = ({
    selectedTrainingType,
    handleSelectChange,
}) => {
    const [trainingVideoSource, setTrainingVideoSource] = useState('');

    useEffect(() => {
        const selectedTraining = MOCKED_TRAININGS_DATA[selectedTrainingType];

        if (selectedTraining?.videos?.length) {
            setTrainingVideoSource(selectedTraining.videos[0]);
        }
    }, [selectedTrainingType]);

    /**
     * @param {string} videoSource
     */
    const handleSelectTrainingVideo = (videoSource) => {
        setTrainingVideoSource(videoSource);
    };

    /**
     * @param {Object} options
     * @returns {Array<Object>}
     */
    const formatSelectOptions = (options) =>
        Object.entries(options).map(([itemType, itemData]) => ({
            value: itemType,
            label: itemData.title,
            isPurchased: itemData.isPurchased,
        }));

    return (
        <section className={styles.videoTrainings}>
            <div className='container'>
                <div
                    className={`videoTrainingsButton ${styles.videoTrainingsButton}`}
                >
                    <Select
                        className={styles.videoTrainingsSelectCustom} 
                        options={formatSelectOptions(MOCKED_TRAININGS_DATA)}
                        selectedOptionValue={selectedTrainingType}
                        onChange={handleSelectChange}
                    />
                </div>

                {selectedTrainingType ===
                MOCKED_TRAININGS_TYPES.healthy_diet ? (
                    <div>Custom menu</div>
                ) : (
                    <div className={styles.videoTrainingsBlock}>
                        <div className={styles.videoTrainingsNumber}>
                            {Object.entries(MOCKED_TRAININGS_DATA).map(
                                ([trainingType, trainingData]) => (
                                    <div key={trainingType}>
                                        {selectedTrainingType ===
                                            trainingType &&
                                            trainingData.videos.map(
                                                (videoSource, videoIndex) => (
                                                    <Button
                                                        key={videoIndex}
                                                        onClick={() =>
                                                            handleSelectTrainingVideo(
                                                                videoSource
                                                            )
                                                        }
                                                    >
                                                        {`Тренування ${
                                                            videoIndex + 1
                                                        }`}
                                                    </Button>
                                                )
                                            )}
                                    </div>
                                )
                            )}
                        </div>

                        <div className={styles.videoTrainingsVideo}>
                            {trainingVideoSource && (
                                <VideoPlayer
                                    videoSource={trainingVideoSource}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

VideoTrainingsSection.propTypes = {
    selectedTrainingType: PropTypes.string.isRequired,
    handleSelectChange: PropTypes.func.isRequired,
};

export default VideoTrainingsSection;
