import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroArrowUpRight } from '@ng-icons/heroicons/outline'
import { SectionHeadersComponent } from 'src/app/shared/section-headers/section-headers.component'

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, NgIconComponent, SectionHeadersComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
    providers: [
        provideIcons({
            heroArrowUpRight,
        }),
    ],
})
export class PortfolioComponent {
    items = [
        {
            title: 'ContentERP',
            content: 'Article/Blog tracking system for content production, team and financial management.',
            image: 'contenterp.png',
            url: 'https://app.contenterp.com',
        },
        {
            title: 'MA Kleid',
            content: 'Fast fashion e-commerce for German consumers. Sales Man and women Cloths',
            image: 'makleid.png',
            url: 'https://makleid.de',
        },
        {
            title: 'Quizzaro',
            content:
                'Quizzaro is an application that combines competitive spirit with fun, creating an exciting environment.',
            image: 'quizzaro.png',
            url: 'https://quizzaro.com',
        },
    ]
}
