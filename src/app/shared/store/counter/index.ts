import { isDevMode } from '@angular/core';
import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { COUNTER_REDUCER_NODE, CounterState, counterReducer } from './counter';

export interface State {
    [COUNTER_REDUCER_NODE]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
    [COUNTER_REDUCER_NODE]: counterReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
