import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({ options = [], selectedOptionValue = '', onChange }) => (
    <select value={selectedOptionValue} onChange={onChange}>
        {options.map(({ value, title }) => (
            <option key={value} value={value}>
                {title}
            </option>
        ))}
    </select>
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
