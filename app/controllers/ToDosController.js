

import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"

// TODO we get todos fine, but need to draw them

// TODO draw the count of UNCOMPLETED todos
// Like the jot count in jot. BUT we don't want the length of the entire array, how can we create a smaller array that only includes certain items of a specific condition.
// might want to look back at Week 2 content, to create those arrays, then use the number of that one for the count
export class ToDosController {
  constructor() {
    console.log('✅ to-dos')

    AppState.on('account', this.getToDos)



  }

  async getToDos() {
    try {
      await toDoService.getToDos()

    } catch (error) {
      console.error(error) // log the error back
      Pop.toast(error.message)
    }
  }

  async createToDos() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      console.log('formData', formData)
      await toDoService.createToDos(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message)
    }
  }

  // TODO Delete todos, (Gregslist delete car)
  // This needs to be a button on the todo itself, when clicked, it can pass the todo's id down, and our service can send a delete request


  //TODO Complete a todo (Spellbook Prepare Spell)
  // Similar to the delete, you can pass the todo's id when someone clicks on the check box, but in the service, we will have to get that todo back using that id, change it's status and update the API


}
