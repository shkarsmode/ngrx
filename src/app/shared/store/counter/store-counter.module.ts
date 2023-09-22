import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { } from './counter.actions';
import { COUNTER_REDUCER_NODE, counterReducer } from './counter.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(COUNTER_REDUCER_NODE, counterReducer)
    ]
})
export class StoreCounterModule {}
