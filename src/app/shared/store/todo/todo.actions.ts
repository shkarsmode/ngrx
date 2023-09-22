import { createAction, props } from "@ngrx/store";

export enum TodoActionsType {
	Create = '[TODO] create todo item',
	Delete = '[TODO] delete todo item',
	ChangeState = '[TODO] change state of todo item',
	DragAndDrop = '[TODO] drag and drop todo item',
}

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