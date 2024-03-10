import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { LayoutCenteredComponent } from '@main/layout/layout-centered/layout-centered.component'
import { LayoutDefaultComponent } from '@main/layout/layout-default/layout-default.component'
import { LayoutSidebarComponent } from '@main/layout/layout-sidebar/layout-sidebar.component'
import { PageLayout } from '@main/layout/page-layout.enum'
import { PageLayoutService } from '@main/layout/page-layout.service'
import HomeComponent from '@pages/home/home.component'
import { take, timer } from 'rxjs'

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [
        CommonModule,
        RouterModule,
        LayoutCenteredComponent,
        LayoutDefaultComponent,
        LayoutSidebarComponent,
        HomeComponent,
    ],
})
export class AppComponent {
    readonly PageLayout = PageLayout

    constructor(
        public appState: AppStateService,
        public pageLayoutService: PageLayoutService,
    ) {
        // stop initial loading spinner after 1 sec
        timer(1000)
            .pipe(take(1))
            .subscribe({ next: () => this.appState.stopLoading() })
    }
}
