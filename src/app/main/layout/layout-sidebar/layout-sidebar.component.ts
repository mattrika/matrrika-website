import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { isSmallScreen } from '@core/utils/screen.util'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'

@Component({
    selector: 'app-layout-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule, HeaderOneComponent],
    templateUrl: './layout-sidebar.component.html',
    styleUrls: ['./layout-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutSidebarComponent {
    @Input() opened = true

    menuToggles = {
        home: false,
        account: false,
    }

    appName = this.appState.appName
    isSmallScreen = false

    constructor(private appState: AppStateService) {
        this.isSmallScreen = isSmallScreen()
        if (this.isSmallScreen) {
            this.opened = false
        }
    }
}
