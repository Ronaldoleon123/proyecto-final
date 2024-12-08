import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

export const routes: Routes = [
    {
        canActivateChild: [publicGuard()],
        path: 'auth',
        loadChildren: () => import('./auth/caracteristicas/auth.routes').then(m =>m.default),
    },

    {
        canActivateChild: [privateGuard()],
        path: 'tasks',
        loadComponent:() => import('./shared/ui/layaout.component'),
        loadChildren: () => import('./task/caracteristicas/task.routes').then(m =>m.default),
        
    },

    {path: '**',
        redirectTo: '/tasks',
    },

    {
        path: 'auth/forgot-password',
        component: ForgotPasswordComponent
    },
    
];
