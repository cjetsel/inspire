export default class ToDo {
  constructor(data) {
    this.completed = data.completed,
      this._id = data._id,
      this.description = data.description,
      this.user = data.user,
      this.__v = data.__v
  }

  AddTemplate() {
    return `<li class="list-group-item bg-transparent  d-flex justify-content-left align-items-center">
							<button class="btn btn-outline-light p-0 mr-2 rounded-circle"
								onclick="app.controllers.todo-controller.Complete()"><img src="assets/img/svg/025-favorite.svg"
									class="img-fluid " name="${this._id}" id="${this._id}"alt="complete"></button>
							${this.description}
						</li>`
  }

  AddCompletedTemplate() {
    return `<li class="list-group-item bg-transparent  d-flex justify-content-left align-items-center">
							<button class="btn btn-outline-light p-0 mr-2 rounded-circle"
								onclick="app.controllers.todo-controller.Complete()"><img src="assets/img/svg/001-delete.svg"
									class="img-fluid " name="${this._id}" id="${this._id}"alt="complete"></button>
							${this.description}
						</li>`
  }



}

