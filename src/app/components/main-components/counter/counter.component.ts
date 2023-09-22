import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountMethodEnum } from '../../../shared/enums/CountMethodEnum';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

    public readonly CountMethod: typeof CountMethodEnum = CountMethodEnum;

    @Output() count: EventEmitter<CountMethodEnum> = new EventEmitter();
    
    @Input() counter: number | null = 0;
    @Input() updatedAt: number | null | undefined = 0;
    @Input() cannotDecrease: boolean = true;
    @Input() equalToOne: boolean = true;

    public countWithSpecifyMethod(method: CountMethodEnum): void {
        this.count.emit(method);
    }
}
