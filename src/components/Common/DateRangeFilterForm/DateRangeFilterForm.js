import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const DateRangeFilterForm = ({ text, min, max, className }) => (
	<form>
		<label className={className}> {text} </label>
		<input type="date" min={min} max={max} className="inputTypeDate" />
	</form>
);

DateRangeFilterForm.propTypes = {
	text: PropTypes.string.isRequired,
	min: PropTypes.string.isRequired,
	max: PropTypes.string.isRequired,
	className: PropTypes.string
};

export default DateRangeFilterForm;
