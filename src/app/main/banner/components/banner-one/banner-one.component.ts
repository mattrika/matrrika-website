import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-banner-one',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './banner-one.component.html',
    styleUrl: './banner-one.component.scss',
})
export class BannerOneComponent {}
