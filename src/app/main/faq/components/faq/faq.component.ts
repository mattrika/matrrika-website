import { Component } from '@angular/core'
import { faqData } from '../faq-data'
import { CommonModule, NgFor } from '@angular/common'

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, NgFor],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent {
    faqData = faqData // Your FAQ data

    openStates: boolean[] // Array to track open states

    constructor() {
        this.openStates = new Array(this.faqData.length).fill(false) // Initialize all as closed
    }

    toggleAccordion(index: number) {
        this.openStates[index] = !this.openStates[index] // Toggle the specific accordion
    }

    isOpen(index: number): boolean {
        return this.openStates[index] // Check if the specific accordion is open
    }
}
