import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let toDo = _todoService.ToDo;
	let template = '';
	for (let i = 0; i < toDo.length; i++) {
		let myToDo = toDo[i]
		template += myToDo.AddTemplate()
	}
	console.log("theres todos")
	document.getElementById('todo-new').innerHTML = template;
}


function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		_todoService.addSubscriber('todos', _drawTodos)
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
