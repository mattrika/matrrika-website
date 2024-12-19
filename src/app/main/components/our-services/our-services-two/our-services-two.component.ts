
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-our-services-two',
    imports: [CommonModule],
    templateUrl: './our-services-two.component.html',
    styleUrl: './our-services-two.component.scss',
})
export class OurServicesTwoComponent {
    serviceContent = [
        {
            image_path: './../../../../../assets/web-dev-icon.png',
            title: 'Web App Development',
            description:
                'We specialize in developing dynamic, responsive, and scalable web applications tailored to your business needs.',
            isExpanded: false,
        },
        {
            image_path: './../../../../../assets/mobile-app-dev-icon.png',
            title: 'Mobile App Development',
            description:
                'Our mobile app development service covers both Android and iOS platforms, offering innovative solutions for seamless user experiences.',
            isExpanded: false,
        },
        {
            image_path: './../../../../../assets/ui-ux-icon.png',
            title: 'UI/UX Development',
            description:
                'We design intuitive and user-friendly interfaces that enhance user engagement and satisfaction, focusing on both aesthetics and functionality.',
            isExpanded: false,
        },
        {
            image_path: './../../../../../assets/maintainace-icon.png',
            title: 'Maintenance',
            description:
                'We offer ongoing maintenance services to ensure your applications remain updated, secure, and optimized.',
            isExpanded: false,
        },
        {
            image_path: './../../../../../assets/itconsultation-icon.png',
            title: 'IT Consultation',
            description:
                'Our IT consultants provide expert advice and solutions to help your business leverage technology for growth and efficiency.',
            isExpanded: false,
        },
        {
            image_path: './../../../../../assets/security-icon.png',
            title: 'Security',
            description:
                'We ensure that your web application is secure and protected from cyber threats by implementing the latest security measures and protocols.',
            isExpanded: false,
        },
    ]

    toggleAnswer(item: any): void {
        item.isExpanded = !item.isExpanded
    }
}

