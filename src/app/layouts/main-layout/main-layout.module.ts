import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CounterComponent } from 'src/app/components/counter/counter.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { MaterialsModule } from 'src/app/shared/materials/materials.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    CounterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MaterialsModule
  ]
})
export class MainLayoutModule { }
