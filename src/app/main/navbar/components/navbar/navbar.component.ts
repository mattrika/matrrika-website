import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { RouterLink } from '@angular/router'
import { AppStateService } from '@core/states/app-state.service'
import { AuthStateService } from '@main/auth/services/auth.service'
import { getHomeRoutes } from '@pages/home/home.routes'
import { DUIButton } from 'david-ui-angular'

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, MatIconModule, DUIButton ,MatButtonModule, MatMenuModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
    readonly homeRoutes = getHomeRoutes()
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    appName = this.appState.appName

    constructor(
        public auth: AuthStateService,
        public appState: AppStateService,
    ) {}

    ngOnInit(): void {
        void 0
    }

    toggle(): void {
        this.sidenavToggle.next()
    }
}

