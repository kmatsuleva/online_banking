import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ links = [], reference, className }) => {
	return links.map((text) => 
		<a href={reference} className={className}>
			{text}
		</a>
	);
};

Link.propTypes = {
	links: PropTypes.array,
	to: PropTypes.string,
	className: PropTypes.string
};

export default Link;
