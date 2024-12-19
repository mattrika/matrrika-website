import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-statistics-three',
    imports: [],
    templateUrl: './statistics-three.component.html',
    styleUrl: './statistics-three.component.scss',
})
export class StatisticsThreeComponent implements AfterViewInit {
    @ViewChild('projects') projectCount!: ElementRef
    @ViewChild('teamMembers') teamMemberCount!: ElementRef
    @ViewChild('workForce') workForce!: ElementRef
    @ViewChild('launched') launched!: ElementRef

    ngAfterViewInit(): void {
        const counter = { project: 0, teamMember: 0, workforceRemotePercentage: 0, launchedYear: 0 }
        const projectCountEl = this.projectCount.nativeElement
        const teamMemberCountEl = this.teamMemberCount.nativeElement
        const workForceEl = this.workForce.nativeElement
        const launchedEl = this.launched.nativeElement

        gsap.registerPlugin(ScrollTrigger)
        gsap.timeline({
            scrollTrigger: {
                trigger: '#counting-trigger',
                // markers:true,
                start: 'top 80%',
                end: 'top top',
                toggleActions: 'restart none none pause', //sequence:onEnter onLeave onEnterBack onLeaveBack
                onLeaveBack: () => {
                    counter.project = 0
                    counter.teamMember = 0
                    counter.workforceRemotePercentage = 0
                    counter.launchedYear = 0
                },
            },
        })
            .to(
                counter,
                {
                    project: 4,
                    duration: 2.5,
                    ease: 'power1.out',
                    onUpdate: () => {
                        projectCountEl.textContent = Math.round(counter.project).toString() + '+'
                    },
                },
                0,
            )
            .to(
                counter,
                {
                    teamMember: 8,
                    duration: 2.5,
                    ease: 'power1.out',
                    onUpdate: () => {
                        teamMemberCountEl.textContent = Math.round(counter.teamMember).toString()
                    },
                },
                0,
            )
            .to(
                counter,
                {
                    workforceRemotePercentage: 100,
                    duration: 2.5,
                    ease: 'power1.out',
                    onUpdate: () => {
                        workForceEl.textContent = Math.round(counter.workforceRemotePercentage).toString() + '%'
                    },
                },
                0,
            )
            .to(
                counter,
                {
                    launchedYear: 2023,
                    duration: 2.5,
                    ease: 'power1.out',
                    onUpdate: () => {
                        launchedEl.textContent = Math.round(counter.launchedYear)
                    },
                },
                0,
            )
    }
}




