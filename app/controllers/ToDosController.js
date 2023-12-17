

import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDos.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"


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

    event.preventDefault()
    const form = event.target
    const formData = getFormData(form)
    console.log('formData', formData)
    // @ts-ignore
    form.reset()
    await toDoService.createToDos()
    // } catch (error) {
    //   console.error(error) // log the error back
    //   Pop.toast(error.message)
    // }
  }

}
