import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-layout-default',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss'
})
export class LayoutDefaultComponent {

}
