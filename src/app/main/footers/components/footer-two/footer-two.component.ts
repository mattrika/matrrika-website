import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-footer-two',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer-two.component.html',
    styleUrl: './footer-two.component.scss',
})
export class FooterTwoComponent {
    year: number = new Date().getFullYear()
}
