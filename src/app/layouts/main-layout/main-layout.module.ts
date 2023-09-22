import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponentsModule } from 'src/app/components/main-components/main-components.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    MainComponentsModule
  ]
})
export class MainLayoutModule { }
