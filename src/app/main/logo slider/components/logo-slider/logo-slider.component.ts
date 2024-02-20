import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-logo-slider',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logo-slider.component.html',
    styleUrl: './logo-slider.component.scss',
})
export class LogoSliderComponent {
    logos: string[] = [
        'https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/023/177/437/small/s-letter-logo-of-brand-identity-company-and-business-logo-on-white-background-illustration-vector.jpg',
        'https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg',
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/332238206/original/8aa54184e5f80bf77fa04b31e33d053b035608ea/create-a-modern-logo-design-for-your-business-its-my-work.jpg',
        // Add more logos as needed
    ]

    logoTransform = 'translateX(0%)'

    ngOnInit(): void {
        this.animateLogoSlider()
    }

    animateLogoSlider(): void {
        setInterval(() => {
            this.logoTransform = 'translateX(-100%)'
            setTimeout(() => {
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                this.logos.unshift(this.logos.pop()!)
                this.logoTransform = 'translateX(0%)'
            }, 20000)
        }, 40000)
    }
}
