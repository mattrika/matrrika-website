import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { getHomeRoutes } from '@pages/home/home.routes'

@Component({
    selector: 'app-review-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './review-list.component.html',
    styleUrl: './review-list.component.scss',
})
export class ReviewListComponent {
    readonly homeRoutes = getHomeRoutes()
}
