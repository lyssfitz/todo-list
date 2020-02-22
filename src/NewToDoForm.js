import React, { Component } from 'react';

class NewToDoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createToDo(this.state);
		this.setState({ task: '' });
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New ToDo</label>
				<input
					type="text"
					placeholder="New ToDo"
					id="task"
					name="task"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add ToDo</button>
			</form>
		);
	}
}

export default NewToDoForm;
