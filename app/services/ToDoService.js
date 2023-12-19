
import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class ToDosService {


  async createToDos(formData) {
    const response = await api.post('api/todos', formData)
    console.log('posting todos', response)
    const newToDos = new ToDo(response.data)
    // AppState.activeToDo = newToDos
    console.log('new ToDo', newToDos)
    AppState.activeToDo.push(formData)
  }

  //this works fine- getting todos to load into console 
  async getToDos() {

    const response = await api.get('api/todos')
    const toDos = response.data.map(todo => new ToDo(todo))
    AppState.activeToDo = toDos
    console.log('active todos', toDos)

    // FIXME can we draw them to the page
  }

  async deleteTodo(toDoId) {
    const response = await api.delete(`api/todos/${toDoId}`)
    const indexToRemove = AppState.activeToDo.findIndex(todo => todo.id == toDoId)
    AppState.activeToDo.splice(indexToRemove, 1)
  }

  async markCompleteTodo(toDoId) {
    const response = await api.put(`api/todos/${toDoId}`)
    const markComplete = AppState.activeToDo.find(todo => todo.id == toDoId)
    markComplete ? toDoId == true : toDoId == false

  }
}









export const toDoService = new ToDosService()