import { createAction, props } from "@ngrx/store";
import { TodoState } from "./todo.reducer";

export enum TodoActionsType {
	Create = '[TODO] create todo item',
	Delete = '[TODO] delete todo item',
	ChangeState = '[TODO] change state of todo item',
	DragAndDrop = '[TODO] drag and drop todo item',
	ChangeStorage = '[TODO] change local storage of todo items',
};

export const createTodo = createAction(
	TodoActionsType.Create,
	props<{ name: string }>()
);

export const deleteTodo = createAction(
	TodoActionsType.Delete,
	props<{ id: number }>()
);

export const changeStateTodo = createAction(
	TodoActionsType.ChangeState,
	props<{ id: number }>()
);

export const dragAndDrop = createAction(
	TodoActionsType.DragAndDrop,
	props<{ previousIndex: number, currentIndex: number }>()
);

export const changeStorage = createAction(
	TodoActionsType.ChangeStorage,
	props<{ todoState: TodoState }>()
);