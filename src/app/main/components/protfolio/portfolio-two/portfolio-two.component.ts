import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-our-projects',
  imports: [],
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.scss'
})
export class OurProjectsComponent implements AfterViewInit {
  projectContent = [
    {
      imagePath: '/contenterp.png',
      title: 'ContentERP'
    },
    {
      imagePath: '/makleid.png',
      title: 'MA Kleid'
    },
    {
      imagePath: '/quizzaro.png',
      title: 'Quizzaro'
    }
  ]
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#project-warper',
        pin: '#project-warper',
        scrub: 1.5,
        start: '80% center',
        end: '+=1500',
        toggleActions: 'play reverse none none'
      },
      default: {
        ease: 'linear',
        duration: 20
      }
    })

    if (document.body.offsetWidth >= 640 && document.body.offsetWidth < 1024) {
      scrollTL
        .to('#contentERP', { x: 800 })
        .to('#quaziro', { y: 60 })
        .to('#quaziro', { x: 800 })
        .to('#makhelid', { y: 150, })
    } else if (document.body.offsetWidth >= 1024) {
      scrollTL
        .to('#project-Text', { y: 200 })
        .to('#project-warper', { x: 0, transformOrigin: 'center center' })
        .to('#contentERP', { x: 800 })
        .to('#quaziro', { y: 60 })
        .to('#quaziro', { x: 800 })
        .to('#makhelid', { y: 120, })
    }



  }
}
