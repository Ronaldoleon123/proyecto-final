import { Routes } from "@angular/router";

export default[
    {
        path: '',
        loadComponent: () => import('./task-list/task-list.component').then(m => m.TaskListComponent),
    },
    
    
    {
        path: 'new',
        loadComponent: () => import('./task-form/task-form.component').then(m=>m.TaskFormComponent),
    },

    {
        path: 'edit/:id',
        loadComponent: () => import('./task-form/task-form.component').then(m=>m.TaskFormComponent),
    }


] as Routes ;