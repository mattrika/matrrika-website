import { Component } from '@angular/core'
import {BannerComponent} from './design-01/main/components/banners/banner/banner.component'
import { BannerOneComponent } from './design-01/main/components/banners/banner-one/banner-one.component'
import { BannerTwoComponent } from './design-01/main/components/banners/banner-two/banner-two.component'
import { FaqComponent } from './design-01/main/components/faq/faq/faq.component'
import { FeaturesComponent } from './design-01/main/components/features/features/features.component'
import { HeaderOneComponent } from './design-01/main/components/headers/header-one/header-one.component'
import { FooterTwoComponent } from './design-01/main/components/footers/footer-two/footer-two.component'
import { HeaderTwoComponent } from './design-01/main/components/headers/header-two/header-two.component'
import { MapComponent } from './design-01/main/components/maps/map/map.component'
import { NavbarComponent } from './design-01/main/components/navbar/navbar/navbar.component'
import { OurServicesOneComponent } from './design-01/main/components/our-services/our-services-one/our-services-one.component'
import { PortfolioComponent } from "./design-01/main/components/protfolio/portfolio/portfolio.component";
import { QualityOneComponent } from './design-01/main/components/qualities/quality-one/quality-one.component'
import { StatisticsComponent } from './design-01/main/components/statistics/statistics/statistics.component'
import { StatisticsTwoComponent } from './design-01/main/components/statistics/statistics-two/statistics-two.component'
import { OurTeamOneComponent } from './design-01/main/components/team/our-team-one/our-team-one.component'
import { TestimonialOneComponent } from './design-01/main/components/testimonials/testimonial-one/testimonial-one.component'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        BannerComponent,
        BannerOneComponent,
        BannerTwoComponent,
        FaqComponent,
        FeaturesComponent,
        FooterTwoComponent,
        HeaderOneComponent,
        HeaderTwoComponent,
        MapComponent,
        NavbarComponent,
        OurServicesOneComponent,
        PortfolioComponent,
        QualityOneComponent,
        StatisticsComponent,
        StatisticsTwoComponent,
        OurTeamOneComponent,
        TestimonialOneComponent,
    ],
})
export class AppComponent {}
