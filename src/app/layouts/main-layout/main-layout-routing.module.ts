import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/main/main.component';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
    {
        path: '', 
        component: MainLayoutComponent, 
        children: [
            {
                path: '', component: MainComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
