import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TODO_RECUDER_NODE, TodoState } from "./todo.reducer";

export const todoFeatureSelector = createFeatureSelector<TodoState>(TODO_RECUDER_NODE);

export const todoListSelector = createSelector(
	todoFeatureSelector,
	(state: TodoState) => state.todoList
);