import { createAction, props } from "@ngrx/store";
import { HttpErrorResponse } from '@angular/common/http';

export const fetchTodo = createAction('[todo/fetchTodoStart]');

export const fetchTodoSuccess = createAction('[todo/fetchTodoSuccess]', props<{response:any}>())

export const fetchTodoError = createAction('[todo/fetchTodoError]',props<{error:HttpErrorResponse}>)
