import { Component, OnInit } from '@angular/core'
import { FaqData, faqData } from '../faq-data'
import { CommonModule, NgClass, NgFor } from '@angular/common'
import { initFlowbite } from 'flowbite'

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, NgClass],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent implements OnInit {
    faqData = faqData
    isOpen = false

    ngOnInit(): void {
        initFlowbite()
    }

    isOpenAccordion() {
        this.isOpen = !this.isOpen
    }
}
