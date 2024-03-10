import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderOneComponent } from '@main/headers/header-one/header-one.component'
import { FooterOneComponent } from '../../footers/components/footer-one/footer-one.component'
import { FooterTwoComponent } from '../../footers/components/footer-two/footer-two.component'
import { NavbarComponent } from '../../navbar/components/navbar/navbar.component'

@Component({
    selector: 'app-layout-default',
    standalone: true,
    templateUrl: './layout-default.component.html',
    styleUrls: ['./layout-default.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterModule,
        HeaderOneComponent,
        NavbarComponent,
        FooterOneComponent,
        FooterTwoComponent,
    ],
})
export class LayoutDefaultComponent {}
