import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { ITodo } from "../models/todo";
import { todoActions } from "../actions";
import { createReducer, on } from "@ngrx/store";

interface state extends EntityState<ITodo>{
  selectedTodoId:number | undefined
}


const adapter:EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
  selectId:x=>x.id,
  sortComparer:false
})

const initialState:state = adapter.getInitialState({
  selectedTodoId:undefined
})



export const reducer = createReducer(initialState,
  on(todoActions.fetchTodoSuccess,(state,{response})=>{
    return adapter.setAll(response,state)
  })
  )
