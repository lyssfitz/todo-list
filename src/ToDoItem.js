import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			task: this.props.task,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}
	handleRemove() {
		this.props.removeToDo(this.props.id);
	}
	toggleForm() {
		this.setState({ isEditing: !this.state.isEditing });
	}
	handleUpdate(evt) {
		evt.preventDefault();
		//take new task data and pass up to parent.
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ isEditing: false });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleToggle(evt) {
		this.props.toggleToDo(this.props.id);
	}

	render() {
		let result;
		if (this.state.isEditing) {
			result = (
				<div className="ToDo">
					<form className="ToDo-edit-form" onSubmit={this.handleUpdate}>
						<input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
						<button>Save</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="ToDo">
					<li
						className={this.props.completed ? 'ToDo-task completed' : 'ToDo-task'}
						onClick={this.handleToggle}
					>
						{this.props.task}
					</li>
					<div className="ToDo-buttons">
						<button onClick={this.toggleForm}>
							<i class="fas fa-pen" />
						</button>
						<button onClick={this.handleRemove}>
							<i class="fas fa-trash" />
						</button>
					</div>
				</div>
			);
		}
		return result;
	}
}

export default ToDoItem;
