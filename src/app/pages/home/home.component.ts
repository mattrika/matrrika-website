import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BannerComponent } from '@main/banner/components/banner/banner.component'
import { FeaturesComponent } from '@main/features/components/features/features.component'
import { InfoComponent } from '@main/info/components/info/info.component'
import { LogoSliderComponent } from '@main/logo slider/components/logo-slider/logo-slider.component'
import { NavbarComponent } from '@main/navbar/components/navbar/navbar.component'
import { RegistrationComponent } from '@main/registration/components/registration/registration.component'
import { StatisticsComponent } from '@main/statistics/components/statistics/statistics.component'
import { TechnicalBenefitsComponent } from '@main/technical benefits/components/technical-benefits/technical-benefits.component'
import { DUIButton } from 'david-ui-angular'
import { ReviewListComponent } from "../../main/review/components/review-list/review-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [
        CommonModule,
        DUIButton,
        NavbarComponent,
        BannerComponent,
        RegistrationComponent,
        StatisticsComponent,
        ReviewListComponent,
        TechnicalBenefitsComponent,
        FeaturesComponent,
        LogoSliderComponent,
        InfoComponent,
    ],
})
export default class HomeComponent {}
