import ToDo from "../../models/todo.js";

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/chelsey/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {}
}

let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data;
	_subscribers[prop].forEach(fn => fn());
}

export default class TodoService {
	get TodoError() {
		return _state.error;
	}

	get ToDo() {
		return _state.todos;
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn);
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(d => new ToDo(d));
				_setState('todos', data);
			})
			.catch(err => console.error(err));
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				let myToDo = new ToDo(res.data.data);
				_state.todos.push(myToDo);
				this.getTodos();
			})
			.catch(err => console.error(err));
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId);
		todo.completed = !todo.completed;
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos();
			})
			.catch(err => console.error(err));
	}

	removeTodo(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId);
		todoApi.delete(todoId, todo)
			.then(res => {
				this.getTodos();
			})
			.catch(err => console.error(err));
	}

}
