import {
    createAction,
    createFeatureSelector,
    createReducer,
    createSelector,
    on,
    props,
} from '@ngrx/store';

export const COUNTER_REDUCER_NODE = 'counter';

export const increase = createAction(
	'[COUNTER] increase',
	props<{ count: number }>()
);
export const decrease = createAction(
	'[COUNTER] decrease',
	props<{ count: number }>()
);
export const clear = createAction(
	'[COUNTER] clear',
	props<{ count: number }>()
);
export const updateTimestamp = createAction(
    '[COUNTER] update timestamp',
    props<{ updatedAt: number }>()
);

export interface CounterState {
    count: number;
    updatedAt?: number;
}

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

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_REDUCER_NODE);

export const countSelector = createSelector(
    featureSelector,
    state => state.count
);

export const updatedAtSelector = createSelector(
    featureSelector,
    state => state.updatedAt
);
