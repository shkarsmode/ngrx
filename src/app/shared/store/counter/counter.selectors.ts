import { createFeatureSelector, createSelector } from "@ngrx/store";
import { COUNTER_REDUCER_NODE, CounterState } from "./counter.reducer";

export const featureSelector = 
    createFeatureSelector<CounterState>(COUNTER_REDUCER_NODE);

export const countSelector = createSelector(
    featureSelector,
    state => state.count
);

export const updatedAtSelector = createSelector(
    featureSelector,
    state => state.updatedAt
);
