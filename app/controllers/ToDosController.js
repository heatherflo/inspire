

import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


function _showCreateToDoForm() {
  let form = document.getElementById('createToDo')
  console.log('showing the create ToDo Form') //this works
}

export class ToDosController {
  constructor() {
    console.log('✅ to-dos')
    AppState.on('toDo', _showCreateToDoForm)
    AppState.on('toDo', this.createToDo)
    _showCreateToDoForm()



    // AppState.on('user', _drawList)
  }




  async createToDo() {
    try {
      event.preventDefault() //this works
      console.log('createToDo') //this works
      const form = event.target
      const formData = getFormData(form)
      console.log('in the form', formData) //this works- the ToDo value pops up in the console
      await toDoService.createToDos(formData)
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }

  }
}

