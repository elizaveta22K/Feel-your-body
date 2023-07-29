import React, { useState, useEffect } from 'react';

export default function VideoTrainings(props) {
    const { props: carouselData, selectedOption, onSelectChange } = props;

    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const selectedItem = carouselData.find(
            (item) => item.title === selectedOption
        );
        if (selectedItem && selectedItem.video.length > 0) {
            setVideoUrl(selectedItem.video[0]);
        } else {
            setVideoUrl('');
        }
    }, [selectedOption, carouselData]);

    const handleButtonClick = (video) => {
        setVideoUrl(video);
    };

    return (
        <div>
            <select value={selectedOption} onChange={onSelectChange}>
                {carouselData.map((item, index) => (
                    <option key={index} value={item.title}>
                        {item.title}
                    </option>
                ))}
            </select>
            <div>
                {carouselData.map((item, index) => (
                    <div key={index}>
                        {selectedOption === item.title &&
                            item.video.map((video, videoIndex) => (
                                <button
                                    key={videoIndex}
                                    onClick={() => handleButtonClick(video)}
                                >
                                    Тренування {videoIndex + 1}
                                </button>
                            ))}
                    </div>
                ))}
            </div>
            {videoUrl && (
                <div>
                    <video controls>
                        <source src={videoUrl} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
}
