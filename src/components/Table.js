import React, { Component } from 'react';

class Table extends Component {
	constructor(props) {
		super(props);

		this.state = this.props;
		this.renderTableBody = this._renderTableBody.bind(this);
	}

	_renderTableBody() {
		return this.state.data.map((row, rowIndex) => {
			return (
				<tr key={rowIndex}>
					<td>{row.month}</td>
					<td>{row.expenses}</td>
				</tr>
			);
		})
	}
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Montr</th>
						<th>Expenses</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{this.renderTableBody()}</tbody>
			</table>
		)
	}
}

export default Table;
