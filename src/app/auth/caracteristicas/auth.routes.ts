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

] as Routes ;