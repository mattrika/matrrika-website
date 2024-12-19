import { AfterViewInit, Component, ViewChild, ElementRef, QueryList } from '@angular/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
@Component({
    selector: 'app-portfolio-two',
    imports: [],
    templateUrl: './portfolio-two.component.html',
    styleUrl: './portfolio-two.component.scss',
})
export class PortfolioTwoComponent implements AfterViewInit {
    projectContent = [
        {
            imagePath: '/contenterp.png',
            title: 'ContentERP',
        },
        {
            imagePath: '/makleid.png',
            title: 'MA Kleid',
        },
        {
            imagePath: '/quizzaro.png',
            title: 'Quizzaro',
        },
    ]
    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: '#project-warper',
                start: '25% center',
                end: '+=2200',
                pin: '#project-warper',
                scrub: 0.1,
                markers: true,
            },
            defaults: {
                ease: 'linear',
                duration: 10,
            },
        })
            .to('#makhelid', { y: -140, scale: 0.85 })
            .to('#quaziro', { y: -640, scale: 0.9 }, '<+4')
            .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
            .to('#contentERP', { y: -1130 }, '<-5')
            .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')

    }
}
