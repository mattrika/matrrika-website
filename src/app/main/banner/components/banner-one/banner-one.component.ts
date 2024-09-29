import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgxGradientTextComponent } from '@omnedia/ngx-gradient-text'
import { NgxBackgroundBeamsComponent } from '@omnedia/ngx-background-beams'

@Component({
    selector: 'app-banner-one',
    standalone: true,
    imports: [CommonModule, RouterModule, NgxGradientTextComponent, NgxBackgroundBeamsComponent],
    templateUrl: './banner-one.component.html',
    styleUrl: './banner-one.component.scss',
})
export class BannerOneComponent {}
