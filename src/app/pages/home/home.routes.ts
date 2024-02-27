import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'

export type HomeRoutes = {
    index: Route
    redirect: Route
    contractUs: Route
    team: Route
    softwareDevelopment: Route
    softwareTesting: Route
    uiDesign: Route
    customSoftwareDevelopment: Route
    faq: Route
    portfolio: Route
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
        faq: {
            path: 'faq',
            title: 'faq',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/faq/components/faq/faq.component').then((m) => m.FaqComponent),
        },
        portfolio: {
            path: 'portfolio',
            title: 'portfolio',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/protfolio/components/portfolio/portfolio.component').then(
                    (m) => m.PortfolioComponent,
                ),
        },
        softwareDevelopment: {
            path: 'software-development',
            title: 'software development:',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/software development/components/software-development/software-development.component'
                ).then((m) => m.SoftwareDevelopmentComponent),
        },
        softwareTesting: {
            path: 'software-testing',
            title: 'software testing:',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/software testing/components/software-testing/software-testing.component'
                ).then((m) => m.SoftwareTestingComponent),
        },
        uiDesign: {
            path: 'ui-design',
            title: 'ui design',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/ui design/components/ui-design/ui-design.component').then(
                    (m) => m.UiDesignComponent,
                ),
        },
        customSoftwareDevelopment: {
            path: 'custom-software-development',
            title: 'custom software development',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/custom software development/components/custom-software-development/custom-software-development.component'
                ).then((m) => m.CustomSoftwareDevelopmentComponent),
        },
    }
}
