import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DUIAccordion } from 'david-ui-angular'

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, DUIAccordion],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent {}
