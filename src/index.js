import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import Data from './data';

ReactDOM.render(<Table {...Data} />, document.getElementById('root'));
