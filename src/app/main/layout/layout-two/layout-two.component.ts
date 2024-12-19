import { Component } from '@angular/core';
import { FooterTwoComponent } from '@main/components/footers/footer-two/footer-two.component'
import { HeaderThreeComponent } from '@main/components/headers/header-three/header-three.component'


@Component({
  selector: 'app-layout-two',
  imports: [HeaderThreeComponent,FooterTwoComponent],
  templateUrl: './layout-two.component.html',
  styleUrl: './layout-two.component.scss'
})
export class LayoutTwoComponent {

}
