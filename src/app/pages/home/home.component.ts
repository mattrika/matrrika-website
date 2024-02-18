import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BannerComponent } from '@main/banner/components/banner/banner.component'
import { NavbarComponent } from '@main/navbar/components/navbar/navbar.component'
import { RegistrationComponent } from '@main/registration/components/registration/registration.component'
import { StatisticsComponent } from '@main/statistics/components/statistics/statistics.component'
import { DUIButton } from 'david-ui-angular'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        DUIButton,
        NavbarComponent,
        BannerComponent,
        RegistrationComponent,
        StatisticsComponent,
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export default class HomeComponent {}
