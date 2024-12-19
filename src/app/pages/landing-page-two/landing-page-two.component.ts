import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { BannerFourComponent } from '@main/components/banners/banner-four/banner-four.component'
import { ContactUsComponent } from '@main/components/contact-us/contact-us.component'
import { FaqTwoComponent } from '@main/components/faqs/faq-two/faq-two.component'
import { OurServicesTwoComponent } from '@main/components/our-services/our-services-two/our-services-two.component'
import { PortfolioTwoComponent } from '@main/components/portfolio/portfolio-two/portfolio-two.component'
import { StatisticsThreeComponent } from '@main/components/statistics/statistics-three/statistics-three.component'
import { TestimonialTwoComponent } from '@main/components/testimonials/testimonial-two/testimonial-two.component'
import { OurTeamTwoComponent } from '@main/components/team/our-team-two/our-team-two.component'

@Component({
  selector: 'app-landing-page-two',
  imports: [BannerFourComponent,ContactUsComponent,FaqTwoComponent,OurServicesTwoComponent,PortfolioTwoComponent,StatisticsThreeComponent,TestimonialTwoComponent,OurTeamTwoComponent],
  templateUrl: './landing-page-two.component.html',
  styleUrl: './landing-page-two.component.scss'
})
export class LandingPageTwoComponent implements OnInit {
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
