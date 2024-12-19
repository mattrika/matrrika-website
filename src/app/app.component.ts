import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LayoutTwoComponent } from '@main/layout/layout-two/layout-two.component'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [LayoutTwoComponent,RouterOutlet],
})
export class AppComponent {}
