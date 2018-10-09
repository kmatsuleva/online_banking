import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, to, alt, className }) => (
	<div className="logo">
		<a href={to}>
			<img src={src} alt={alt} className={className} />
		</a>
	</div>
);

Logo.propTypes = {
	src: PropTypes.string,
	to: PropTypes.string,
	alt: PropTypes.string
};

export default Logo;
