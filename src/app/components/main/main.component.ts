import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clear, countSelector, decrease, increase, updatedAtSelector } from 'src/app/reducers/counter';
import { CountMethodEnum } from 'src/app/shared/enums/CountMethodEnum';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    
    public counter: Counter = new Counter(0, this.store);
    
    constructor(private store: Store) {}

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        this.counter.countWithSpecifyMethod(method);
    }

}

class Counter {
    private _counter$: Observable<number> = this.store.select(countSelector);
    private _updatedAt$: Observable<number | undefined> = this.store.select(updatedAtSelector);

    /**
    * @param {number} counter - Initial value of counter.
    * @param {Store} store - NgRx store
    */
    constructor(
        private counter: number,
        private store: Store
    ) {}

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        switch(method) {
            case CountMethodEnum.Addition: {
                this.counter++;
                const counter = { count: this.counter }; 
                this.store.dispatch(increase(counter));
                break;
            }
            case CountMethodEnum.Subtraction: {
                if (this.cannotDecrease) return;

                this.counter--;
                const counter = { count: this.counter }; 
                this.store.dispatch(decrease(counter));
                break;
            }
            case CountMethodEnum.EqualToOne: {
                if (this.equalToOne) return;

                this.counter = 1;
                const counter = { count: this.counter }; 
                this.store.dispatch(clear(counter));
                break;
            }
        }
    }

    public get value$(): Observable<number> {
        return this._counter$;
    }

    public get updatedAt$(): Observable<number | undefined> {
        return this._updatedAt$;
    }

    public get cannotDecrease(): boolean {
        return this.counter <= 0;
    }

    public get equalToOne(): boolean {
        return this.counter === 1;
    }
    
}