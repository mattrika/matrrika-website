import { CommonModule } from '@angular/common'
import { Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BannerTwoComponent } from '@main/components/banners/banner-two/banner-two.component'
import { StatisticsTwoComponent } from '@main/components/statistics/statistics-two/statistics-two.component'
import { OurTeamOneComponent } from '@main/components/team/our-team-one/our-team-one.component'

@Component({
    selector: 'app-landing-page-one',
    templateUrl: './landing-page-one.component.html',
    styleUrls: ['./landing-page-one.component.scss'],
    imports: [CommonModule, BannerTwoComponent, StatisticsTwoComponent,OurTeamOneComponent],
})
export class LandingPageOneComponent {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.fragment.subscribe((fragment) => {
            if (fragment) {
                const element = document.querySelector(`#${fragment}`)
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        })
    }
}
