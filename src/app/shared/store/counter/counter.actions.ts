import {
    createAction,
    props
} from '@ngrx/store';

export enum CounterActionsType {
	Increase = '[COUNTER] increase',
	Decrease = '[COUNTER] decrease',
	Clear = '[COUNTER] clear',
	UpdateTimestamp = '[COUNTER] update timestamp'
}

export const increase = createAction(
	CounterActionsType.Increase,
	props<{ count: number }>()
);
export const decrease = createAction(
	CounterActionsType.Decrease,
	props<{ count: number }>()
);
export const clear = createAction(
	CounterActionsType.Clear,
	props<{ count: number }>()
);
export const updateTimestamp = createAction(
    CounterActionsType.UpdateTimestamp,
    props<{ updatedAt: number }>()
);
