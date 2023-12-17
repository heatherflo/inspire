

import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


function _showCreateToDoForm() {
  let form = document.getElementById('createToDo')
  console.log('showing the create ToDo Form') //this works

}
function _drawList() {
  console.log('🔖drawing list')
  const newToDos = AppState.toDo
  console.log('newToDo', newToDos)
  let content = newToDos.drawListTemplate
  document.getElementById('draw-list').innerHTML = content
  console.log('list of todos', content)
}

export class ToDosController {
  constructor() {
    console.log('✅ to-dos')
    AppState.on('user', _showCreateToDoForm)
    AppState.on('toDo', this.createToDo)
    _showCreateToDoForm()
    // AppState.on('', _drawList)


  }





  async createToDo() {
    try {
      event.preventDefault() //this works
      console.log('createToDo') //this works
      const form = event.target
      const formData = getFormData(form)
      console.log('in the form', formData) //this works- the ToDo value pops up in the console
      await toDoService.createToDos(formData)
      // @ts-ignore
      form.reset()
      // _drawList()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }

  }

  async updateTodo() {
    try {
      event.preventDefault()
      const form = event.target
      const FormData = getFormData(form)
      await toDoService.updateToDo()

    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}
