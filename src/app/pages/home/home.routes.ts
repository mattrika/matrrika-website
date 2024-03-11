import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type HomeRoutes = {
    index: Route
    redirect: Route
    // contactUs: Route
    // team: Route
    // faq: Route
    portfolio: Route
}

export function getHomeRoutes(): HomeRoutes {
    return {
        index: {
            path: '',
            title: 'Mattrika Technologies - Home',
            resolve: { layout: setLayout(PageLayout.Default) },
            loadComponent: () => import('./home.component'),
        },
        redirect: {
            path: 'home',
            redirectTo: '',
            pathMatch: 'full',
        },
        // contactUs: {
        //     path: 'contact',
        //     title: 'Contract',
        //     resolve: { layout: setLayout(PageLayout.Default) },
        // },
        // team: {
        //     path: 'team',
        //     title: 'team:',
        //     resolve: { layout: setLayout(PageLayout.Default) },
        // },
        // faq: {
        //     path: 'faq',
        //     title: 'faq',
        //     resolve: { layout: setLayout(PageLayout.Default) },
        //     loadComponent: () =>
        //         import('@main/faq/components/faq/faq.component').then((m) => m.FaqComponent),
        // },
        portfolio: {
            path: 'portfolio',
            title: 'portfolio',
            resolve: { layout: setLayout(PageLayout.Default) },
            loadComponent: () =>
                import('@main/protfolio/components/portfolio/portfolio.component').then(
                    (m) => m.PortfolioComponent,
                ),
        },
    }
}
