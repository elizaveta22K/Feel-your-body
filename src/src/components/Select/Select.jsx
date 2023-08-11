import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

// TODO: перенсти стилі у Select.css, які стосуються селекту, або передати className, як props
import styles from '../../sections/ProfilePage/VideoTrainingsSection/VideoTrainingsSection.module.css';

import './Select.css';
import CustomOption from './components/CustomOption';

const CustomSelect = ({ options = [], onChange, className }) => {
    return (
        <div className={styles.customSelectContainer}>
            <Select
                // className='basic-single'
                defaultValue={options[0]}
                // isDisabled={isDisabled}
                // isLoading={isLoading}
                name='video-trainings'
                options={options}
                onChange={onChange}
                components={{ Option: CustomOption }}
            />
            <span className={styles.customSelectArrow}></span>
        </div>
    );
};

CustomSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            isPurchased: PropTypes.bool,
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
