import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterTwoComponent } from './../../components/footers/footer-two/footer-two.component'
import { HeaderTwoComponent } from './../../components/headers/header-two/header-two.component'

@Component({
    selector: 'app-layout-one',
    standalone: true,
    templateUrl: './layout-one.component.html',
    styleUrls: ['./layout-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        HeaderTwoComponent,
        FooterTwoComponent,
    ],
})
export class LayoutOneComponent {}
