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

        {
            imagePath: '/Sheresta.png',
            title: 'Sheresta.png',
        },
    ]
    ngAfterViewInit(): void {
        gsap.registerPlugin(ScrollTrigger)

        if (window.innerWidth < 640) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-warper',
                    start: '55% center',
                    end: '+=2200',
                    pin: '#project-warper',
                    scrub: 0.1,
                },
                defaults: {
                    ease: 'linear',
                    duration: 10,
                },
            })
                .to('#makhelid', { scale: 0.9 })
                .to('#quaziro', { y: -470, scale: 0.95 }, '<+4')
                .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
                .to('#contentERP', { y: -958 }, '<-5')
                .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                .to('#sheresta', { y: -1300 }, '<-3') // added Sheresta
        } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-warper',
                    start: '55% center',
                    end: '+=2200',
                    pin: '#project-warper',
                    scrub: 0.1,
                },
                defaults: {
                    ease: 'linear',
                    duration: 10,
                },
            })
                .to('#makhelid', { scale: 0.9 })
                .to('#quaziro', { y: -470, scale: 0.95 }, '<+4')
                .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
                .to('#contentERP', { y: -961 }, '<-5')
                .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                .to('#sheresta', { y: -1330 }, '<-3')
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-warper',
                    start: '55% center',
                    end: '+=2200',
                    pin: '#project-warper',
                    scrub: 0.1,
                },
                defaults: {
                    ease: 'linear',
                    duration: 10,
                },
            })
                .to('#makhelid', { scale: 0.9 })
                .to('#quaziro', { y: -440, scale: 0.95 }, '<+4')
                .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
                .to('#contentERP', { y: -876 }, '<-5')
                .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                .to('#sheresta', { y: -1200 }, '<-3')
        } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-warper',
                    start: '36% center',
                    end: '+=2200',
                    pin: '#project-warper',
                    scrub: 0.1,
                },
                defaults: {
                    ease: 'linear',
                    duration: 10,
                },
            })
                .to('#makhelid', { y: -140, scale: 0.85 })
                .to('#quaziro', { y: -589, scale: 0.9 }, '<+4')
                .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
                .to('#contentERP', { y: -1021 }, '<-5')
                .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                .to('#sheresta', { y: -1440 }, '<-3')
        } else {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '#project-warper',
                    start: '24% center',
                    end: '+=2200',
                    pin: '#project-warper',
                    scrub: 0.1,
                },
                defaults: {
                    ease: 'linear',
                    duration: 10,
                },
            })
                // .to('#makhelid', { y: -150, scale: 0.85 })
                // .to('#quaziro', { y: -596, scale: 0.9 }, '<+4')
                // .to('#makleidpic', { opacity: 0.2, duration: 1 }, '>-0.5')
                // .to('#contentERP', { y: -1024, scale: 0.95 }, '<-5')
                // .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                // .to('#sheresta', { y: -1330 }, '<-3')
                // -------------
                // .to('#sheresta', { y: -150, scale: 0.85 })
                // .to('#quaziro', { y: -596, scale: 0.9 }, '<+4')
                // .to('#sherestapic', { opacity: 0.2, duration: 1 }, '>-0.5')
                // .to('#contentERP', { y: -1024, scale: 0.95 }, '<-5')
                // .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                // .to('#makhelid', { y: -1330 }, '<-3')
                // -----------------
                .to('#sheresta', { y: -150, scale: 0.85 })
                .to('#quaziro', { y: -596, scale: 0.9 }, '<+4')
                .to('#sherestapic', { opacity: 0.2, duration: 1 }, '>-0.5')
                .to('#contentERP', { y: -1024, scale: 0.95 }, '<-5')
                .to('#quizzaropic', { opacity: 0.2, duration: 1 }, '>-0.4')
                .to('#makhelid', { y: -1330 }, '<-3')
        }
    }
}
