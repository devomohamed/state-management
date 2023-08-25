import { HttpErrorResponse } from "@angular/common/http"
import { createReducer, on } from "@ngrx/store"
import { todoActions } from "../actions"

interface State {
  isLoading:boolean | undefined
  error:HttpErrorResponse | undefined
}

const initialState:State = {
  isLoading:undefined,
  error:undefined
}

export const reducer = createReducer(initialState,
  on(todoActions.fetchTodo, (state:State,action) => ({...state, isLoading:true })),
  on(todoActions.fetchTodoError, (state:State, {error}) => ({...state, isLoading:true, error })),
  on(todoActions.fetchTodoSuccess, (state:State) => ({...state, isLoading:false, error:undefined }))
  )
