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
    technicalBenefits: Route
    relevantSkill: Route
    improvementCertification: Route
    allDetails: Route
    experienceDesigner: Route
    qualityGuaranteed: Route
    mordenTechnologies: Route
    allReviews: Route
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
        allReviews: {
            path: 'all-reviews',
            title: 'all reviews',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import('@main/review/components/all-reviews/all-reviews.component').then(
                    (m) => m.AllReviewsComponent,
                ),
        },
        technicalBenefits: {
            path: 'technical-benefits',
            title: 'technical benefits',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/technical-benefits/technical-benefits.component'
                ).then((m) => m.TechnicalBenefitsComponent),
        },
        relevantSkill: {
            path: 'technical-benefits/relevant-skill',
            title: 'relevant skill',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/relevant-skill/relevant-skill.component'
                ).then((m) => m.RelevantSkillComponent),
        },
        improvementCertification: {
            path: 'technical-benefits/improvement-certification',
            title: 'improvement certification',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/improvement-certification/improvement-certification.component'
                ).then((m) => m.ImprovementCertificationComponent),
        },
        allDetails: {
            path: 'technical-benefits/all-details',
            title: 'all details',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/all-details/all-details.component'
                ).then((m) => m.AllDetailsComponent),
        },
        experienceDesigner: {
            path: 'technical-benefits/experience-designer',
            title: 'experience designer',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/experience-designer/experience-designer.component'
                ).then((m) => m.ExperienceDesignerComponent),
        },
        qualityGuaranteed: {
            path: 'technical-benefits/quality-guaranteed',
            title: 'quality guaranteed',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/quality-guaranteed/quality-guaranteed.component'
                ).then((m) => m.QualityGuaranteedComponent),
        },
        mordenTechnologies: {
            path: 'technical-benefits/morden-technologies',
            title: 'morden technologies',
            resolve: { layout: setLayout(PageLayout.Sidebar) },
            loadComponent: () =>
                import(
                    '@main/technical benefits/components/morden-technologies/morden-technologies.component'
                ).then((m) => m.MordenTechnologiesComponent),
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
