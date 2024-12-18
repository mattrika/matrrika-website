import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-quality-one',
    imports: [CommonModule],
    templateUrl: './quality-one.component.html',
    styleUrl: './quality-one.component.scss',
})
export class QualityOneComponent {

    qualityData = [
        { title: 'Internationally Skilled Developers' },
        { title: 'Software Development Best Practice Maintained' },
        { title: 'Use of Stable and Proven Approach' },
        { title: 'Apply Sense of Ownership and Look Ahead' },
        { title: 'Utilize Latest Technologies' },
        { title: 'Implement Client Feedback Early On' },
    ]
}
