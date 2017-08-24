import React from 'react';
import ReactDOM from 'react-dom';
import TableExample from './components/Table';
import Data from './data';
import './styles.css';

ReactDOM.render(
	<TableExample {...Data} />,
	document.getElementById('root')
);
