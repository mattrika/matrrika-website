import { CommonModule } from '@angular/common'
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { MaterialModules } from '@core/ui/material'
import { getHomeRoutes } from '@pages/home/home.routes'

@Component({
    selector: 'app-header-one',
    standalone: true,
    imports: [CommonModule, RouterModule, ...MaterialModules],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderOneComponent implements OnInit {
    readonly homeRoutes = getHomeRoutes()
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName

    constructor(public appState: AppStateService) {}

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }
}
