import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TODO_RECUDER_NODE, todoReducer } from './todo.reducer';

@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature(TODO_RECUDER_NODE, todoReducer)
    ]
})
export class StoreTodoModule {}
