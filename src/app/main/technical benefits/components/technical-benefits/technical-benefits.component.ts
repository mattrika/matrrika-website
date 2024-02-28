import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { getHomeRoutes } from '@pages/home/home.routes'

@Component({
    selector: 'app-technical-benefits',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './technical-benefits.component.html',
    styleUrl: './technical-benefits.component.scss',
})
export class TechnicalBenefitsComponent {
    readonly homeRoutes = getHomeRoutes()
}
