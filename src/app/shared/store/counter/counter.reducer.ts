import {
    createReducer,
    on
} from '@ngrx/store';
import { clear, decrease, increase, updateTimestamp } from './counter.actions';

export const COUNTER_REDUCER_NODE = 'counter';

export interface CounterState {
    count: number;
    updatedAt?: number;
};

export const initialState: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(
    initialState,
    on(increase, (state, { count }) => ({
        ...state, count
    })),
    on(decrease, (state, { count }) => ({
        ...state, count
    })),
    on(clear, (state, { count }) => ({
        ...state, count
    })),
	on(updateTimestamp, (state, { updatedAt }) => ({
		...state, updatedAt
	}))
);
