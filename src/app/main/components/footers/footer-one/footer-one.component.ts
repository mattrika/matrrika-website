import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-footer-one',
    imports: [CommonModule],
    templateUrl: './footer-one.component.html',
    styleUrl: './footer-one.component.scss',
})
export class FooterOneComponent {
    year: number = new Date().getFullYear()
}
