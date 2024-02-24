import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { getHomeRoutes } from '@pages/home/home.routes'

@Component({
    selector: 'app-our-services',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './our-services.component.html',
    styleUrl: './our-services.component.scss',
})
export class OurServicesComponent {
    readonly homeRoutes = getHomeRoutes()
}
