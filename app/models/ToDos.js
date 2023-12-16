import { AppState } from "../AppState.js"


export class ToDo {
  constructor(data) {
    this.completed = data.completed //true/false check box 
    this.description = data.description
    this.creatorId = data.creatorId //list only visible if user is logged in
    this.checked = data.checked //if checked then marked as done and will disappear? or if checked then delete button pops up?
  }

  getActiveListTemplate() {
    ``
  }
}

// completed: Boolean, required
// description: String, required
// creatorId: String (References Account Id), required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)