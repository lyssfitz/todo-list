import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [{ task: 'Feed the kittens' }, { task: 'Practice piano' }] };
	}
	render() {
		const todos = this.state.todos.map(todo => {
			return <ToDoItem task={todo.task} />;
		});
		return (
			<div>
				<h1>ToDo List!</h1>
				<ul>{todos}</ul>
			</div>
		);
	}
}

export default ToDoList;
