import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroCodeBracket } from '@ng-icons/heroicons/outline'
import {
    heroCodeBracketSquareSolid,
    heroCog8ToothSolid,
    heroMoonSolid,
    heroScissorsSolid,
    heroShieldCheckSolid,
    heroUserSolid,
} from '@ng-icons/heroicons/solid'

interface ServiceData {
    img: string
    title: string
    description: string
}

@Component({
    selector: 'app-our-services-one',
    imports: [CommonModule, NgIconComponent],
    templateUrl: './our-services-one.component.html',
    styleUrl: './our-services-one.component.scss',
    providers: [
        provideIcons({
            heroCodeBracket,
            heroCodeBracketSquareSolid,
            heroUserSolid,
            heroScissorsSolid,
            heroShieldCheckSolid,
            heroMoonSolid,
            heroCog8ToothSolid,
        }),
    ],
})
export class OurServicesOneComponent {
    serviceData: ServiceData[] = [
        {
            img: 'heroCodeBracketSquareSolid',
            title: 'Web App Development',
            description:
                'We make your SaaS business idea come true with a custom web application that is scalable, secure, and user-friendly.',
        },
        {
            img: 'heroScissorsSolid',
            title: 'UI/UX Development',
            description:
                'We design and develop user-friendly interfaces that enhance the user experience and make your web application visually appealing.',
        },
        {
            img: 'heroUserSolid',
            title: 'Maintenance',
            description:
                'We provide ongoing support and maintenance services to ensure that your web application runs smoothly and efficiently.',
        },
        {
            img: 'heroCog8ToothSolid',
            title: 'Mobile Apps Development',
            description:
                'We develop custom mobile applications that are compatible with iOS and Android platforms and provide a seamless user experience.',
        },
        {
            img: 'heroMoonSolid',
            title: 'IT Consultation',
            description:
                'Not ready for a full-fledged project yet? We offer IT consultation services to help you plan and strategy your digital transformation journey.',
        },
        {
            img: 'heroShieldCheckSolid,',
            title: 'Security',
            description:
                'We ensure that your web application is secure and protected from cyber threats by implementing the latest security measures and protocols.',
        },
    ]
}
