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

    public onDeleteTodo = (id: number) => this.delete.emit(id);
    public onChangeStateTodo = (id: number) => this.changeState.emit(id);
    public onTodoDropped = (event: CdkDragDrop<any[]>) => this.dragAndDropEvent.emit(event);
    
    public todosTrackBy = (_: number, todo: ITodo): number => todo.id;
    
}
