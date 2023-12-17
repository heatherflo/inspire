import { AppState } from "../AppState.js"


export class ToDo {
  constructor(data) {
    this.completed = data.completed //true/false check box 
    this.description = data.description
    this.creatorId = data.creatorId //list only visible if user is logged in
    this.checked = data.checked ? true : false //if checked then marked as done and will disappear? or if checked then delete button pops up?
  }

  get updateToDo() {
    return `${this.checked}`
  }

  get drawListTemplate() {
    return ` ${this.description}
    <input class="form-check-input" type="checkbox" name="checked">
    <label class="form-check-label" for="checkbox"></label>
  </form>`
  }

}


// completed: Boolean, required
// description: String, required
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)