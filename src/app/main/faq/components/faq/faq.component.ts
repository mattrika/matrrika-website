import { Component, OnInit } from '@angular/core'
import { faqData } from '../faq-data'
import { CommonModule, NgFor } from '@angular/common'
import { initFlowbite } from 'flowbite'

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, NgFor],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
    faqData = faqData // Your FAQ data
    openIndex: number | null = null // Start with no accordion open

    ngOnInit(): void {
        initFlowbite()
    }

    toggleAccordion(index: number) {
        // If the clicked accordion is already open, close it. Otherwise, open the clicked accordion.
        this.openIndex = this.openIndex === index ? null : index
    }

    isOpen(index: number): boolean {
        return this.openIndex === index // Check if the specific accordion is open
    }
}
