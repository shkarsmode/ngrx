import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { clear, countSelector, decrease, increase } from 'src/app/reducers/counter';
import { CountMethodEnum } from 'src/app/shared/enums/CountMethodEnum';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {
    
    public counter: Counter = new Counter(0, this.store);
    
    constructor(
        private store: Store
    ) {}

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        this.counter.countWithSpecifyMethod(method);
    }

}

class Counter {
    public updatedAt: number;
    public counter$: Observable<number> = this.store.select(countSelector);

    constructor(
        private counter: number = 0,
        private store: Store
    ) {}

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        switch(method) {
            case CountMethodEnum.Addition: {
                this.counter++;
                this.store.dispatch(increase());
                this.updateTimestamp(); 
                break;
            }
            case CountMethodEnum.Subtraction: {
                if (this.cannotDecrease) return;

                this.counter--;
                this.store.dispatch(decrease());
                this.updateTimestamp();
                break;
            }
            case CountMethodEnum.EqualToOne: {
                if (this.equalToOne) return;

                this.counter = 1;
                this.store.dispatch(clear());
                this.updateTimestamp();
                break;
            }
        }
    }

    private updateTimestamp(): void {
        this.updatedAt = Date.now();
    }

    public get value(): Observable<number> {
        return this.counter$.pipe(tap(counter => this.counter = counter));
    }

    public get cannotDecrease(): boolean {
        return this.counter <= 0;
    }

    public get equalToOne(): boolean {
        return this.counter === 1;
    }
    
}