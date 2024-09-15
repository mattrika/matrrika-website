import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { qualityData, type QualityData } from './quality-data'

@Component({
    selector: 'app-quality-one',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './quality-one.component.html',
    styleUrl: './quality-one.component.scss',
})
export class QualityOneComponent {
    qualityData: QualityData[] = qualityData
}
