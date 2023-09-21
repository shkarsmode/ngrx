import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { clear, decrease, increase, updateTimestamp } from 'src/app/reducers/counter';

@Injectable({
    providedIn: 'root',
})
export class EffectsService {

    public updatedAt$ = createEffect(() => 
        this.actions$.pipe(
            ofType(increase, decrease, clear),
            map(() => updateTimestamp({ updatedAt: Date.now() })),
        )
    );

    constructor(
        private actions$: Actions
    ) {}
}
