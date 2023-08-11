import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection.module.css';

import './Select.css';

const Select = ({ options = [], selectedOptionValue = '', onChange }) => (
    <div className={styles.customSelectContainer}>
        <select
            className={styles.videoTrainingsSelectCustom}
            value={selectedOptionValue}
            onChange={onChange}
        >
            {options.map(({ value, title, imageSrc }) => (
                <option
                    className={styles.videoTrainingsOption}
                    key={value}
                    value={value}
                >
                    {title}
                    {imageSrc && (
                        <span>
                            <img src={imageSrc} alt={title} />
                        </span>
                    )}
                </option>
            ))}
        </select>
        <span className={styles.customSelectArrow}></span>
    </div>
);

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedOptionValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Select;
