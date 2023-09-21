import { isDevMode } from '@angular/core';
import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { COUNTER_KEY, CounterState, counterReducer } from './counter';

export interface State {
    [COUNTER_KEY]: CounterState;
}

export const reducers: ActionReducerMap<State> = {
    [COUNTER_KEY]: counterReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
