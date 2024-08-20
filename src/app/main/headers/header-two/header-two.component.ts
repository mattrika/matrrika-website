import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { getHomeRoutes } from '@pages/home/home.routes'
import { Data } from 'src/assets/data/data'
import { headerRoute, HeaderRoute } from './header-route-data'

@Component({
    selector: 'app-header-two',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './header-two.component.html',
    styleUrl: './header-two.component.scss',
})
export class HeaderTwoComponent {
    public websiteLogo: string = '../../../../assets/Mattrika_technologies.png'
    public websiteName: string = Data.websiteName
    headerRoute: HeaderRoute[] = headerRoute

    readonly homeRoutes = getHomeRoutes()
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    isExpanded: boolean = false

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
