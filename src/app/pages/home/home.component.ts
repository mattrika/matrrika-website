import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BannerComponent } from '@main/banner/components/banner/banner.component'
import { FeaturesComponent } from '@main/features/components/features/features.component'
import { NavbarComponent } from '@main/navbar/components/navbar/navbar.component'
import { StatisticsComponent } from '@main/statistics/components/statistics/statistics.component'
import { DUIButton } from 'david-ui-angular'
import { HeaderOneComponent } from '../../main/headers/header-one/header-one.component'

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [CommonModule, HeaderOneComponent],
})
export default class HomeComponent {}
