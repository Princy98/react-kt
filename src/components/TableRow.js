import React from 'react';

import Button from './Button';
import TableCell from './TableCell';

const TableRow = ({rowData, actions, rowIndex}) => {
	const _renderTableCells = Object.keys(rowData).map((item, index) => {
		return <TableCell cellData={rowData[item]} key={index} />
	});

	const _actionButtons = actions.map((action, actionIndex) => {
		return (
			<Button
				type={action.type}
				key={actionIndex}
				label={action.label}
				classNames={action.classNames}
				eventHandler={action.eventHandler}
				rowIndex={rowIndex}
			/>
		)
	}) ;

	return (
		<tr>
			{_renderTableCells}
			<TableCell cellData={_actionButtons} />
		</tr>
	)
}

export default TableRow;
