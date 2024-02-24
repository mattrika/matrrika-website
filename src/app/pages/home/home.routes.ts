import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type HomeRoutes = {
    index: Route
    redirect: Route
    contractUs: Route
    team: Route
}

export function getHomeRoutes(): HomeRoutes {
    return {
        index: {
            path: '',
            title: 'Home',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () => import('./home.component'),
        },
        redirect: {
            path: 'home',
            redirectTo: '',
            pathMatch: 'full',
        },
        contractUs: {
            path: 'contractUs',
            title: 'ContractUs',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/registration/components/registration/registration.component').then(
                    (m) => m.RegistrationComponent,
                ),
        },
        team: {
            path: 'team',
            title: 'team:',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/about us/components/about-us/about-us.component').then(
                    (m) => m.AboutUsComponent,
                ),
        },
    }
}
