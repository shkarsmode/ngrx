import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from 'src/app/shared/interfaces/ITodo';
import { changeStateTodo, createTodo, deleteTodo, dragAndDrop } from 'src/app/shared/store/todo/todo.actions';
import { TodoState } from 'src/app/shared/store/todo/todo.reducer';
import { todoListSelector } from 'src/app/shared/store/todo/todo.selectors';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';

@Component({
    selector: 'app-todo-widget',
    templateUrl: './todo-widget.component.html',
    styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {

    public todoList$: Observable<ITodo[]>;

    constructor(
        private store: Store<TodoState>,
        private localStorageService: LocalStorageService
    ) {}

    public ngOnInit(): void {
        this.initTodoListObservert();
        this.localStorageService.initLocalStorageEvents();
    }
    
    public createNewTodo = (todo: string) => 
        this.store.dispatch(createTodo({ name: todo }));

    public onDeleteTodo = (id: number) => 
        this.store.dispatch(deleteTodo({ id }));
    
    public onChangeStateTodo= (id: number) => 
        this.store.dispatch(changeStateTodo({ id }));

    public onDragAndDropTodo(event: CdkDragDrop<any[]>): void{
        const { currentIndex, previousIndex } = event;
        this.store.dispatch(dragAndDrop({ currentIndex, previousIndex }));
    }

    private initTodoListObservert = () => 
        this.todoList$ = this.store.select(todoListSelector);
    
}
