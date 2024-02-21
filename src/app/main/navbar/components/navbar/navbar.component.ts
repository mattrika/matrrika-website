import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { RouterLink } from '@angular/router'
import { getHomeRoutes } from '@pages/home/home.routes'

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, MatIconModule, MatButtonModule, MatMenuModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    readonly homeRoutes = getHomeRoutes()
}
