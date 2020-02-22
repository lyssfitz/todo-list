import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import NewToDoForm from './NewToDoForm';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [{ task: 'Feed the kittens' }, { task: 'Practice piano' }] };
		this.create = this.create.bind(this);
	}

	create(newToDo) {
		this.setState({
			todos: [...this.state.todos, newToDo],
		});
	}
	render() {
		const todos = this.state.todos.map(todo => {
			return <ToDoItem task={todo.task} />;
		});
		return (
			<div>
				<h1>ToDo List!</h1>
				<NewToDoForm createToDo={this.create} />
				<ul>{todos}</ul>
			</div>
		);
	}
}

export default ToDoList;
