import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { Testimonial, testimonialData } from '@main/testimonials/testimonial-data'

@Component({
    selector: 'app-testimonial-one',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial-one.component.html',
    styleUrl: './testimonial-one.component.scss',
})
export class TestimonialOneComponent {
    testimonials: Testimonial[] = testimonialData
}
