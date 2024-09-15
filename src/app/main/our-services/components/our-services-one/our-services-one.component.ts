import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroCodeBracket } from '@ng-icons/heroicons/outline'
import {
    heroCodeBracketSquareSolid,
    heroCog8ToothSolid,
    heroMoonSolid,
    heroScissorsSolid,
    heroShieldCheckSolid,
    heroUserSolid,
} from '@ng-icons/heroicons/solid'
import { ServiceData, serviceData } from '../our-services-data'

@Component({
    selector: 'app-our-services-one',
    standalone: true,
    imports: [CommonModule, NgIconComponent],
    templateUrl: './our-services-one.component.html',
    styleUrl: './our-services-one.component.scss',
    providers: [
        provideIcons({
            heroCodeBracket,
            heroCodeBracketSquareSolid,
            heroUserSolid,
            heroScissorsSolid,
            heroShieldCheckSolid,
            heroMoonSolid,
            heroCog8ToothSolid,
        }),
    ],
})
export class OurServicesOneComponent {
    serviceData: ServiceData[] = serviceData
}
