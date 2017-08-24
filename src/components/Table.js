import React, { Component } from 'react';
import TableRow from './TableRow';

class TableExample extends Component {
	constructor(props) {
		super(props);

		// Setting the state with all the props that are received by this component
		this.state = { buttonLabel: 'Add', formRow: { month: '', expenses: ''}, ...this.props };
		this.editRow = this._editRow.bind(this);
		this.deleteRow = this._deleteRow.bind(this);
		this.addOrUpdate = this._addOrUpdate.bind(this);
		this.onChange = this._onChange.bind(this);
	}

	_addOrUpdate(event) {
		const currentState = this.state;
		const rowId = this.state.formRow.rowId;

		if (this.state.formRow.rowId) {
			delete this.state.formRow.rowId;
			currentState.data[rowId] = {
				month: this.state.formRow.month,
				expenses: this.state.formRow.expenses
			}
			currentState.buttonLabel = 'Add';
			currentState.formRow = {
				month: '',
				expenses: ''
			}
		} else {
			currentState.data.push(this.state.formRow);
			currentState.formRow = {
				month: '',
				expenses: '',
			};
		}

		this.setState(currentState)
		event.preventDefault();

	}

	_onChange(event) {
		const currentState = this.state;
		const field = event.target.name;
	    const formRow = this.state.formRow;
	    formRow[field] = event.target.value;
	    return this.setState({ ...currentState, formRow });
	}

	_editRow(rowId) {
		const data = this.state.data[rowId];

		this.setState({
			...this.state,
			buttonLabel: 'Update',
			formRow: {
				month: data.month,
				expenses: data.expenses,
				rowId: rowId,
			}
		})
	}

	_deleteRow(rowId) {
		const data = this.state.data;
		delete data[rowId];
		this.setState({
			data
		})
	}

	render() {
		const rowActions = [
			{ type: 'edit', label: 'Edit', classNames: 'btn btn-edit', eventHandler: this.editRow },
			{ type: 'delete', label: 'Delete', classNames: 'btn btn-delete', eventHandler: this.deleteRow }
		];

		const _renderTableRows = this.state.data.map((rowData, rowIndex) => {
			return <TableRow key={rowIndex} actions={rowActions} rowData={rowData} rowIndex={rowIndex} />
		});

		return (
			<div id="main-container">
				<h1>Table Example using React</h1>
				<div className="table-container">
					<table>
						<tbody>
							{_renderTableRows}
						</tbody>
					</table>
				</div>
				<div className="row-input-container">
					<form onSubmit={this.addOrUpdate}>
						<label>Month:</label>
						<input type="text" name="month" value={this.state.formRow.month} onChange={this.onChange} />
						<br />
						<label>Expenses:</label>
						<input type="text" name="expenses" value={this.state.formRow.expenses} onChange={this.onChange} />
						<br />
						<input type="submit" value={this.state.buttonLabel} className="btn btn-add" ref="addOrUpdateButton" />
					</form>
				</div>
			</div>
		)
	}
}

export default TableExample;
