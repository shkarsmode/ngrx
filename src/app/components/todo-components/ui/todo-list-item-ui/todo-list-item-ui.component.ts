import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/shared/interfaces/ITodo';

const CHECK_BOX_DONE = 'check_box';
const CHECK_BOX_BLANK = 'check_box_outline_blank';

@Component({
    selector: 'app-todo-list-item-ui',
    templateUrl: './todo-list-item-ui.component.html',
    styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent {

    @Input() todo: ITodo;
    @Output() delete: EventEmitter<number> = new EventEmitter();
    @Output() changeState: EventEmitter<number> = new EventEmitter();

    public onDeleteTodo = (id: number) => this.delete.emit(id);
    public onChangeStateTodo = (id: number) => this.changeState.emit(id);
    
    public get checkBoxState(): string {
        return this.todo.completed ? CHECK_BOX_DONE : CHECK_BOX_BLANK;
    }

}
