import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Testimonial, testimonialData } from '@main/testimonials/testimonial-data'
import { SectionHeadersComponent } from 'src/app/shared/section-headers/section-headers.component'

@Component({
    selector: 'app-testimonial-one',
    standalone: true,
    imports: [CommonModule, SectionHeadersComponent],
    templateUrl: './testimonial-one.component.html',
    styleUrl: './testimonial-one.component.scss',
})
export class TestimonialOneComponent {
    testimonials: Testimonial[] = testimonialData
}
