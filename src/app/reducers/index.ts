import { isDevMode } from '@angular/core';
import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { counterReducer, CounterState } from './counter';

export interface State {
    counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
    counter: counterReducer
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
