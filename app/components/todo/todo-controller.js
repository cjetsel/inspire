import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let toDo = _todoService.ToDo;
	let template = '';
	let templateComplete = '';
	for (let i = 0; i < toDo.length; i++) {
		let myToDo = toDo[i];
		if (!myToDo.completed) {
			template += myToDo.AddTemplate();
		} else if (myToDo.completed) {
			templateComplete += myToDo.AddCompletedTemplate();
		}
		document.getElementById('todo-new').innerHTML = template;
		document.getElementById('todo-complete').innerHTML = templateComplete;
	}
}

function _drawNum() {
	let incomplete = _todoService.ToDoLength;
	let complete = _todoService.CompleteLength;
	document.getElementById('complete').innerText = `${complete}`
	document.getElementById('incomplete').innerText = `${incomplete}`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}

export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError);
		_todoService.getTodos();
		_todoService.addSubscriber('todos', _drawTodos);
		_todoService.addSubscriber('todos', _drawNum)
	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target;
		var todo = {
			description: form.description.value
		}
		form.reset();
		_todoService.addTodo(todo);
	}

	completeToDo(id) {
		_todoService.toggleTodoStatus(id);
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId);
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId);
	}
}
