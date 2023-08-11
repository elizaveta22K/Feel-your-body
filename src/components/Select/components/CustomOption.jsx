import React from 'react';

import styles from './CustomOption.module.css';

// TODO: delete svg
const SVG = (
    <svg width='10' height='10' xmlns='http://www.w3.org/2000/svg'>
        <rect x='0' y='0' width='10' height='10' fill='red' />
    </svg>
);

const CustomOption = ({ innerProps, isDisabled, label, options, value }) => {
    const currentOption = options.find((option) => option.value === value);

    if (isDisabled) return null;

    return (
        <div className={styles.container} {...innerProps}>
            {label}
            {!currentOption.isPurchased && SVG}
        </div>
    );
};

export default CustomOption;
