import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { OurServicesComponent } from '../../components/our-services/our-services.component';
import { OurProjectsComponent } from '../../components/our-projects/our-projects.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { OurTeamComponent } from '../../components/our-team/our-team.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ContactUsComponent } from '../../design-01/main/components/contact-us/contact-us.component';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [HeroComponent,StatsComponent,OurServicesComponent,OurProjectsComponent,TestimonialComponent,OurTeamComponent,FaqComponent,ContactUsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  activatedRoute=inject(ActivatedRoute);
viewportScroller=inject(ViewportScroller);


ngOnInit(): void {
  this.activatedRoute.fragment.subscribe((fragment: string | null) => {
    if (fragment) {
      this.scrollToSection(fragment);
    }
  });
}


private scrollToSection(fragment: string): void {
  const element = document.getElementById(fragment);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
