import ToDo from "../../models/todo.js";

// // @ts-ignore
// const todoApi = axios.create({
// 	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/todos/',
// 	timeout: 3000
// });

// let _state = {
// 	todos: [],
// 	completed: [],
// 	error: {},
// }
// let _subscribers = {
// 	todos: [],
// 	completed: [],
// 	error: []
// }

// function _setState(prop, data) {
// 	_state[prop] = data
// 	_subscribers[prop].forEach(fn => fn())
// }

// export default class TodoService {
// 	get TodoError() {
// 		return _state.error
// 	}

// 	get ToDo() {
// 		return _state.todos;
// 	}

// 	get Completed() {
// 		return _state.completed;
// 	}

// 	addSubscriber(prop, fn) {
// 		_subscribers[prop].push(fn)
// 	}

// 	getTodos() {
// 		console.log("Getting the Todo List")

// 		todoApi.get()
// 			.then(res => {
// 				_setState('todos', new ToDo(res.data))
// 			})
// 		//	.catch(err => _setState('error', err.response.data))
// 	}

// 	addTodo(todo) {
// 		todoApi.post('', todo)
// 			.then(res => {
// 				this.getTodos()
// 			})
// 			.catch(err => _setState('error', err))
// 	}

// 	toggleTodoStatus(todoId) {
// 		let todo = _state.todos.find(todo => todo._id == todoId)
// 		// Be sure to change the completed property to its opposite
// 		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
// 		todo.completed = !todo.completed
// 		todoApi.put(todoId, todo.completed)
// 			.then(res => {
// 				//DO YOU WANT TO DO ANYTHING WITH THIS?
// 				todoApi.get('todoId')
// 					.then(res => {
// 						_setState('todos', new ToDo(res.data))
// 						this.getTodos()
// 					})
// 					.catch(err => _setState('error', err.response.data))
// 			})
// 	}


// 	removeTodo(todoId) {
// 		// This one is on you to write.... 
// 		// The http method is delete at the todoId
// 	}

// }

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/chelsey/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	complete: [],
	error: {},


}

let _subscribers = {
	todos: [],
	complete: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}
	get ToDo() {
		return _state.todos
	}
	get Complete() {
		return _state.complete
	}
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	// j's crap
	// insertTodo(item) {
	// 	_state['todos'].push(todo)
	// 	this.todosChanged()
	// }

	// insertCompleted(item) {
	// 	_state['complete'].push(item)
	// 	this.completedChanged()
	// }

	// completeTodoItem(item) {
	// 	// remove item from todo
	// 	// push to completed
	// 	this.stateWasChanged()
	// }

	// todosChanged() {
	// 	_subscribers['todo'].forEach(fn => fn())
	// }

	// completedChanged() {
	// 	_subscribers['complete'].forEach(fn => fn())
	// }

	// end j's crap

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(d => new ToDo(d))
				_setState('todos', data)
				console.log(_state)
			})

			.catch(err => console.error(err))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				let myToDo = new ToDo(res.data.data)
				_state.todos.push(myToDo)
				this.getTodos()
			})
			// .catch(err => _setState('error', err.response.data))
			.catch(err => console.error(err))
	}

	toggleTodoStatus(todoId) {

		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		// todo.completed = !todo.completed <-- THIS FLIPS A BOOL
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
			})
			// .catch(err => _setState('error', err.response.data))
			.catch(err => console.error(err))
	}

	CompleteTodo(todo) {

	}

	removeTodo(todoId) {
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}
