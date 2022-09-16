import React from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
    return (
        <LabelFilter htmlFor="filter">
            Find contacts by name:
            <FilterInput type="text" name="filter" value={value} onChange={onChange} />
        </LabelFilter>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
}