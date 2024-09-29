import { CommonModule, NgClass } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { getHomeRoutes } from '@pages/home/home.routes'
import { Data } from 'src/assets/data/data'
import { HeaderRoute, headerRoute } from './header-route-data'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroHome,
    heroCog6Tooth,
    heroUserGroup,
    heroEnvelope,
    heroExclamationCircle,
} from '@ng-icons/heroicons/outline'

@Component({
    selector: 'app-header-two',
    standalone: true,
    imports: [CommonModule, RouterModule, NgClass, NgIconComponent],
    templateUrl: './header-two.component.html',
    styleUrl: './header-two.component.scss',
    viewProviders: [provideIcons({ heroHome, heroCog6Tooth, heroUserGroup, heroEnvelope, heroExclamationCircle })],
})
export class HeaderTwoComponent {
    public websiteLogo = '../../../../assets/Mattrika_technologies.png'
    public websiteName: string = Data.websiteName
    headerRoute: HeaderRoute[] = headerRoute

    readonly homeRoutes = getHomeRoutes()
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    isExpanded = false

    appName = this.appState.appName

    constructor(public appState: AppStateService) {}

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }

    toggleNavbar() {
        this.isExpanded = !this.isExpanded
    }
}
