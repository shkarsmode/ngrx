import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreTodoModule } from 'src/app/shared/store/todo/store-todo.module';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';

@NgModule({
    declarations: [
        TodoWidgetComponent,
        TodoCreateFormUiComponent,
        TodoListUiComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StoreTodoModule,
        DragDropModule
    ],
    exports: [
        TodoWidgetComponent
    ]
})
export class TodoComponentsModule {}
