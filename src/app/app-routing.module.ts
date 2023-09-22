import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', 
        loadChildren: () => 
            import('./layouts/main-layout/main-layout.module').then(m => m.MainLayoutModule)
    },
    {
        path: 'todo', 
        loadChildren: () => 
            import('./layouts/todo-layout/todo-layout.module').then(m => m.TodoLayoutModule)
    },
    {
        path: '**', redirectTo: 'todo'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
