import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroRocketLaunchSolid,
    heroDocumentTextSolid,
    heroUserGroupSolid,
    heroHomeModernSolid,
} from '@ng-icons/heroicons/solid'
import { NgxNumberTickerComponent } from '@omnedia/ngx-number-ticker'

@Component({
    selector: 'app-statistics-two',
    imports: [CommonModule, NgIconComponent, NgxNumberTickerComponent],
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
    
    statisticData = [
        {
            icon: 'heroRocketLaunchSolid',
            title: 'Launched',
            amount: 2023,
        },
        {
            icon: 'heroDocumentTextSolid',
            title: 'Successful Projects',
            amount: 4,
        },
        {
            icon: 'heroUserGroupSolid',
            title: 'Team Members',
            amount: 7,
        },
        {
            icon: 'heroHomeModernSolid',
            title: 'Remote Workforce',
            amount: 100,
        }
    ]
}
