import { moveItemInArray } from "@angular/cdk/drag-drop";
import { createReducer, on } from "@ngrx/store";
import { ITodo } from "../../interfaces/ITodo";
import { changeStateTodo, createTodo, deleteTodo, dragAndDrop } from "./todo.actions";

export const TODO_RECUDER_NODE = 'todo';

export interface TodoState {
	idIncrement: number; // for not existing back
	todoList: ITodo[];
}

const initialState: TodoState = {
	idIncrement: 1,
	todoList: []
}

export const todoReducer = createReducer(
	initialState,
	on(createTodo, (state: TodoState, action) => ({ // TypedAction<TodoActionsType.Create>
		...state,
		idIncrement: state.idIncrement + 1,
		todoList: [
			...state.todoList,
			{
				id: state.idIncrement,
				name: action.name,
				completed: false,
				updatedAt: Date.now()
			}
		]
	})),
	on(deleteTodo, (state: TodoState, action) => ({
		...state,
		todoList: state.todoList.filter((todo: ITodo) => todo.id !== action.id)
	})),
	on(changeStateTodo, (state: TodoState, action) => {
		const todoList = JSON.parse(JSON.stringify(state.todoList));
		const todoItemToUpdateIndex = 
			state.todoList.findIndex((todo: ITodo) => todo.id === action.id)!;
		
		todoList[todoItemToUpdateIndex].completed = 
				!todoList[todoItemToUpdateIndex].completed;

		return {
			...state,
			todoList
		}
	}),
	on(dragAndDrop, (state: TodoState, action) => {
		const todoList = JSON.parse(JSON.stringify(state.todoList));
		moveItemInArray(todoList, action.previousIndex, action.currentIndex);

		return {
			...state,
			todoList
		}
	})
);