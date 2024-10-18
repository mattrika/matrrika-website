import { CommonModule } from '@angular/common'
import { Component, input, OnInit } from '@angular/core'

@Component({
    selector: 'app-section-headers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './section-headers.component.html',
    styleUrl: './section-headers.component.scss',
})
export class SectionHeadersComponent implements OnInit {
    icon = input<string>('bx bxs-hot')
    title = input<string>('')
    subTitle = input<string>('')
    details = input<string>('')

    ngOnInit(): void {}

    designedText() {}
}
