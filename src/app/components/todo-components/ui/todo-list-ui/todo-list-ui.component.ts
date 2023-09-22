import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/shared/interfaces/ITodo';

@Component({
    selector: 'app-todo-list-ui',
    templateUrl: './todo-list-ui.component.html',
    styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent {
    
    @Input() todoList: ITodo[] | null;
    @Output() delete: EventEmitter<number> = new EventEmitter();
    @Output() changeState: EventEmitter<number> = new EventEmitter();
    @Output() dragAndDropEvent: EventEmitter<CdkDragDrop<any[]>> = new EventEmitter();

    public onDeleteTodo(id: number): void {
        this.delete.emit(id);
    }

    public onChangeStateTodo(id: number): void {
        this.changeState.emit(id);
    }

    public onTodoDropped(event: CdkDragDrop<any[]>) {
        if (!this.todoList) return;
        this.dragAndDropEvent.emit(event);
    }

    public todosTrackBy(_: number, todo: ITodo): number {
        return todo.id;
    }
}
