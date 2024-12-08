import { Routes } from "@angular/router";

export default[
    {
        path: 'registro',
        loadComponent: () => import('./registro/registro.component').then(m => m.RegistroComponent),
    },
    {
        path: 'inscripcion',
        loadComponent: () => import('./inscripcion/inscripcion.component').then(m => m.InscripcionComponent),
    },

    {
        path:'recover-password',
        loadComponent: () => import('./recover-password/recover-password.component').then(m=>m.RecoverPasswordComponent),
    },


] as Routes ;