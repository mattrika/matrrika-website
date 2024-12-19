import { Component, OnInit } from '@angular/core'
import { CommonModule, } from '@angular/common'
import { initFlowbite } from 'flowbite'

interface FaqData {
    id: string
    question: string
    answer: string
}
@Component({
    selector: 'app-faq-one',
    imports: [CommonModule],
    templateUrl: './faq-one.component.html',
    styleUrl: './faq-one.component.scss',
})
export class FaqOneComponent implements OnInit {
    isOpen = false
    ngOnInit(): void {
        initFlowbite()
    }

    isOpenAccordion() {
        this.isOpen = !this.isOpen
    }

    faqData: FaqData[] = [
        {
            id: 'accordion-1',

            question: 'Could you share some examples of websites you have designed and developed?',
            answer: 'Certainly! We have a diverse portfolio that highlights our work, giving you a clear sense of our capabilities and design style.',
        },
        {
            id: 'accordion-2',
            question: 'What is your approach to building a website from the ground up?',
            answer: 'We follow a structured approach that includes research, design, development, testing, and launch, ensuring a well-organized and efficient project flow.',
        },
        {
            id: 'accordion-3',
            question: 'What is the estimated timeline for completing my website?',
            answer: 'Timelines can vary based on your goals, but typically, a project takes 2 to 4 months, depending on its complexity and features.',
        },
        {
            id: 'accordion-4',
            question: 'Will you be available for regular website maintenance and support?',
            answer: 'Yes, we offer maintenance packages designed to keep your website current, secure, and performing at its best post-launch.',
        },
        {
            id: 'accordion-5',
            question: 'What is your strategy for achieving mobile responsiveness and optimizing for SEO?',
            answer: 'We are committed to mobile-friendly design and implementing effective SEO strategies to improve your site’s visibility and overall user experience.',
        },
        {
            id: 'accordion-6',
            question: 'Are you able to add e-commerce functionality to my website?',
            answer: 'Absolutely! Our expertise in e-commerce allows us to create a tailored online store that fits your business requirements perfectly.',
        },
        {
            id: 'accordion-7',
            question: 'Can you provide an estimated cost for my project, and do you offer any payment plans?',
            answer: 'The cost depends on the projects scope, but were happy to provide a detailed quote. Additionally, we offer flexible payment plans to fit your budget.',
        },
    ]
}
