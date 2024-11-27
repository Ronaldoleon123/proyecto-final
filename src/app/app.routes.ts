import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/caracteristicas/auth.routes').then(m =>m.default),
    },
    { path: '', redirectTo: 'auth/registro', pathMatch: 'full' }, // Redirigir a una ruta inicial
    { path: '**', redirectTo: 'auth/registro' }, 
];
