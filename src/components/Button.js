import React from 'react';

const Button = ({ type, label, classNames, eventHandler, rowIndex }) => {
	return (
		<button className={classNames} onClick={() => eventHandler(rowIndex) }>{label}</button>
	)
}

export default Button;
