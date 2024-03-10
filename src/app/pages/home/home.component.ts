import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BannerComponent } from '@main/banner/components/banner/banner.component'
import { FeaturesComponent } from '@main/features/components/features/features.component'
import { NavbarComponent } from '@main/navbar/components/navbar/navbar.component'
import { StatisticsComponent } from '@main/statistics/components/statistics/statistics.component'
import { DUIButton } from 'david-ui-angular'
import { BannerTwoComponent } from '../../main/banner/components/banner-two/banner-two.component'
import { HeaderOneComponent } from '../../main/headers/header-one/header-one.component'
import { MapComponent } from '../../main/maps/components/map/map.component'
import { OurServicesOneComponent } from '../../main/our-services/components/our-services-one/our-services-one.component'
import { QualityOneComponent } from '../../main/qualities/components/quality-one/quality-one.component'
import { StatisticsTwoComponent } from '../../main/statistics/components/statistics-two/statistics-two.component'
import { OurTeamOneComponent } from '../../main/team/components/our-team-one/our-team-one.component'
import { TestimonialOneComponent } from '../../main/testimonials/components/testimonial-one/testimonial-one.component'

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        HeaderOneComponent,
        BannerTwoComponent,
        StatisticsTwoComponent,
        MapComponent,
        OurServicesOneComponent,
        QualityOneComponent,
        OurTeamOneComponent,
        TestimonialOneComponent,
    ],
})
export default class HomeComponent {}
