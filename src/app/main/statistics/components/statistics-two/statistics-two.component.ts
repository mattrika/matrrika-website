import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { statisticData, type StatisticData } from './statistics-data'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroRocketLaunchSolid,
    heroDocumentTextSolid,
    heroUserGroupSolid,
    heroHomeModernSolid,
} from '@ng-icons/heroicons/solid'

@Component({
    selector: 'app-statistics-two',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    templateUrl: './statistics-two.component.html',
    styleUrl: './statistics-two.component.scss',
    providers: [
        provideIcons({
            heroRocketLaunchSolid,
            heroDocumentTextSolid,
            heroUserGroupSolid,
            heroHomeModernSolid,
        }),
    ],
})
export class StatisticsTwoComponent {
    statisticData: StatisticData[] = statisticData
}
