import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing-page-two/landing-page-two.component').then((m) => m.LandingPageTwoComponent),
    },
    // {
    //     path: '',
    //     loadComponent: () => import('./pages/landing-page-one/landing-page-one.component').then((m) => m.LandingPageOneComponent),
    // },
    {
        path: 'home',
        redirectTo: '',
        pathMatch: 'full',
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page.component').then((m) => m.NotFoundPageComponent),
    },
]
