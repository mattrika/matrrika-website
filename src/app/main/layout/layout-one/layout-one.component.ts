import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterTwoComponent } from './../../components/footers/footer-two/footer-two.component'
import { HeaderTwoComponent } from './../../components/headers/header-two/header-two.component'

@Component({
    selector: 'app-layout-default',
    standalone: true,
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        HeaderTwoComponent,
        FooterTwoComponent,
    ],
})
export class LayoutDefaultComponent {}
