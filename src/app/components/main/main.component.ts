import { Component } from '@angular/core';
import { CountMethodEnum } from 'src/app/shared/enums/CountMethodEnum';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent {

    public counter: Counter = new Counter();

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        this.counter.countWithSpecifyMethod(method);
    }
    
}

class Counter {
    public updatedAt: number;

    constructor(private counter: number = 0) {}

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        switch(method) {
            case CountMethodEnum.Addition: {
                this.counter++;
                this.updateTimestamp(); 
                break;
            }
            case CountMethodEnum.Subtraction: {
                if (this.cannotDecrease) return;

                this.counter--;
                this.updateTimestamp();
                break;
            }
            case CountMethodEnum.EqualToOne: {
                if (this.equalToOne) return;

                this.counter = 1;
                this.updateTimestamp();
                break;
            }
        }
    }

    private updateTimestamp(): void {
        this.updatedAt = Date.now();
    }

    public get value(): number {
        return this.counter;
    }

    public get cannotDecrease(): boolean {
        return this.counter <= 0;
    }

    public get equalToOne(): boolean {
        return this.counter === 1;
    }

    
}