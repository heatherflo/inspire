import { AppState } from "../AppState.js"


export class ToDo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed //true/false check box 
    this.description = data.description
    this.creatorId = data.creatorId //list only visible if user is logged in
    this.checked = data.checked ? false : true //if checked then marked as done and will disappear? or if checked then delete button pops up?
  }

  get activeTodoListTemplate() {
    return `
  <div class="d-flex">
    <span>
      <div class=" mb-4">
      <form>
        <input class="form-check-input" type="checkbox" name="checked">
        <label class="form-check-label" for="checkbox"></label>
      </form>

      <span class="header fs-4 text-white" >${this.description}</span>
      <span class="p-2  ">
        <button onclick="app.ToDosController.deleteTodo('${this.id}')" class="border border-white rounded header">delete</button>
      </span>
      </div>
    </span>
   </div>
  </div>`
  }

  // TODO need checking boxes and changing styles (Spellbook, Sanbox card template)
  // our template needs to look at the status of the todo, and a or not add to the template based on that status.



}


// completed: Boolean, required
// description: String, required
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)