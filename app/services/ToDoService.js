
import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
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
}









export const toDoService = new ToDosService()