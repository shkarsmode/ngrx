import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './todo.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer)
    ]
})
export class StoreTodoModule {}
