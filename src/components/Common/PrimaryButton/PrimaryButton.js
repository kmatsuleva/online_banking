import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const PrimaryButton = ({ value, onClick, disabled }) => (
	<input type="button" value={value} onClick={onClick} disabled={disabled} className="btnStyle" />
);

PrimaryButton.propTypes = {
	value: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	disabled: PropTypes.string
};

export default PrimaryButton;
