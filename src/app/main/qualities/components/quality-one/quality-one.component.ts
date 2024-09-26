import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { qualityData, type QualityData } from './quality-data'
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border'

@Component({
    selector: 'app-quality-one',
    standalone: true,
    imports: [CommonModule, NgxShineBorderComponent],
    templateUrl: './quality-one.component.html',
    styleUrl: './quality-one.component.scss',
})
export class QualityOneComponent {
    qualityData: QualityData[] = qualityData
}
