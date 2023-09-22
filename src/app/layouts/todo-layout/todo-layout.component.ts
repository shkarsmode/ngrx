import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-todo-layout',
    templateUrl: './todo-layout.component.html',
    styleUrls: ['./todo-layout.component.scss'],
})
export class TodoLayoutComponent {
    constructor(private store: Store) {}
}
