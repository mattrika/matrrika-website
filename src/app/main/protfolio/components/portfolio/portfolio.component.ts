import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DUIAccordion } from 'david-ui-angular'

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, DUIAccordion],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
    items = [
        {
            title: 'ContentERP',
            content:
                'Article/Blog tracking system for content production, team and financial management.',
            image: 'contenterp.png',
            url: 'https://app.contenterp.com',
        },
        {
            title: 'MA Kleid',
            content: 'Fast fashion e-commerce for German consumers.',
            image: 'makleid.png',
            url: 'https://makleid.de',
        },
    ]
}
