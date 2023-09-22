import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-todo-create-form-ui',
    templateUrl: './todo-create-form-ui.component.html',
    styleUrls: ['./todo-create-form-ui.component.scss'],
})
export class TodoCreateFormUiComponent {

    @Output() create: EventEmitter<string> = new EventEmitter();
    public todo: string = '';

    public onCreateTodo(): void {
        if (this.isDisableCreateButton) return;
        this.create.emit(this.todo);
        this.todo = '';
    }

    public get isDisableCreateButton(): boolean {
        if (!this.todo || this.todo.length < 2) return true;
        return false;
    } 
}
