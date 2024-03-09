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
export class PortfolioComponent {}
