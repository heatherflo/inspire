
import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { api } from "./AxiosService.js"

class ToDosService {

  async createToDos(formData) {
    const response = await api.post(`api/todos`, formData)
    console.log('saved toDo', response.data.description) //this works 
    const newToDo = new ToDo(response.data)
    console.log('newToDo', newToDo) //this works
    AppState.toDo = newToDo
    // AppState.toDo.push(newToDo)
    this.updateToDo()
  }

  async updateToDo(formData) {
    const response = await api.put(`api/todos`, formData)
    console.log('update checkbox', response.data.checked)
    await toDoService.updateToDo(formData)
    const checkedBox = new ToDo(response.data)
  }




}


export const toDoService = new ToDosService()