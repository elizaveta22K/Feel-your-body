import React from 'react';
import PropTypes from 'prop-types';

import reviewsArrow from '../../../../../img/components/icon6.png';

const TrainingCarouselArrow = ({
    className,
    style,
    onClick,
    direction = 'next',
}) => {
    return (
        <img
            className={className}
            src={reviewsArrow}
            style={{
                ...style,
                display: 'block',
                width: 'auto',
                height: 'auto',
                transform: direction === 'prev' ? 'rotate(180deg)' : undefined,
            }}
            onClick={onClick}
            alt={`${direction} Arrow`}
        />
    );
};

TrainingCarouselArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.oneOf(['next', 'prev']),
};

export default TrainingCarouselArrow;
