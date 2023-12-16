
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ToDosService {

  async createToDos(formData) {
    const response = await api.post(`api/todos`, formData)
    console.log('saved toDo', response) //not working 
  }


}

export const toDoService = new ToDosService()