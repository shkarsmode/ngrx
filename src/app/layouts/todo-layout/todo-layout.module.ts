import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoComponentsModule } from 'src/app/components/todo-components/todo-components.module';
import { TodoLayoutRoutingModule } from './todo-layout-routing.module';
import { TodoLayoutComponent } from './todo-layout.component';

@NgModule({
    declarations: [
        TodoLayoutComponent
    ],
    imports: [
        CommonModule, 
        TodoLayoutRoutingModule,
        TodoComponentsModule
    ],
})
export class TodoLayoutModule {}
