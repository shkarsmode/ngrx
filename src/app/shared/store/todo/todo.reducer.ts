import { moveItemInArray } from "@angular/cdk/drag-drop";
import { createReducer, on } from "@ngrx/store";
import { ITodo } from "../../interfaces/ITodo";
import { changeStateTodo, changeStorage, createTodo, deleteTodo, dragAndDrop } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
	idIncrement: number; // for not existing back
	todoList: ITodo[];
};

const initialState: TodoState = {
	idIncrement: 1,
	todoList: []
};

export const todoReducer = createReducer(
	initialState,
	on(createTodo, (state: TodoState, { name }) => ({  // TypedAction<TodoActionsType.Create>
		...state,
		idIncrement: state.idIncrement + 1,
		todoList: [
			...state.todoList,
			{
				id: state.idIncrement,
				name,
				completed: false,
				updatedAt: Date.now()
			}
		]
	})),
	on(deleteTodo, (state: TodoState, { id }) => ({
		...state,
		todoList: state.todoList.filter((todo: ITodo) => todo.id !== id)
	})),
	on(changeStateTodo, (state: TodoState, { id }) => ({
			...state,
			todoList: state.todoList.map((todo: ITodo) => 
				todo.id === id ? 
				{ ...todo, completed: !todo.completed } : todo
			)
		})
	),
	on(dragAndDrop, (state: TodoState, { previousIndex, currentIndex }) => {
		const todoList = JSON.parse(JSON.stringify(state.todoList));
		moveItemInArray(todoList, previousIndex, currentIndex);

		return {
			...state,
			todoList
		}
	}),
	on(changeStorage, (state: TodoState, { todoState }) => {
		return {
			...state,
			...todoState
		}
	})
);