import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { changeStorage } from '../store/todo/todo.actions';
import { TodoState } from '../store/todo/todo.reducer';
import { todoFeatureSelector } from '../store/todo/todo.selectors';

export const TODO_LOCALSTORAGE_KEY = 'todo';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    
    constructor(
        private store$: Store<TodoState>
    ) { }

    public initLocalStorageEvents(): void {
        this.initLocalStorageChangeListener();
        this.initLocalStorageObserver();
    }

    private initLocalStorageObserver(): void {
        this.dispatchTodoStateFromLocalStorage();

        this.store$.pipe(
            select(todoFeatureSelector),
            filter(state => !!state)
        ).subscribe(state => {
            localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state))
        });
    }

    private initLocalStorageChangeListener(): void {
        window.addEventListener('storage', () => this.dispatchTodoStateFromLocalStorage());
    }

    private dispatchTodoStateFromLocalStorage(): void {
        const todoState = this.localStorageTodoState;
        if (todoState) {
            this.store$.dispatch(changeStorage({ todoState }));
        }
    }

    private get localStorageTodoState(): TodoState {
        const todo = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
        return todo ? JSON.parse(todo) : null;
    }
}
