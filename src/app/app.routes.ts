

import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./design-01/pages/home/home.component').then((m) => m.default),
    },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    // {
    //     path: '**',
    //     loadComponent: () =>
    //         import('./pages/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent),
    // },
]
