import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { StoreCounterModule } from 'src/app/shared/store/counter/store-counter.module';
import { CounterComponent } from './counter/counter.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        MainComponent,
        CounterComponent
    ],
    imports: [
        CommonModule,
        MaterialsModule,
        StoreCounterModule
    ],
    exports: [
        MainComponent,
        CounterComponent
    ]
})
export class MainComponentsModule {}
