import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/caracteristicas/auth.routes').then(m =>m.default),
    },

    {path: 'tasks',
        loadChildren: () => import('./task/caracteristicas/task.routes').then(m =>m.default),
        
    },

    {path: '**',
        redirectTo: '/tasks',
    }
    
];
