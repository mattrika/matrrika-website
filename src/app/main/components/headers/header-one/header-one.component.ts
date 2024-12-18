import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-header-one',
    imports: [CommonModule, RouterModule],
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
})
export class HeaderOneComponent {
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    isExpanded = false

    toggle(): void {
        this.sidenavToggle.next()
    }

    toggleNavbar() {
        this.isExpanded = !this.isExpanded
    }
}
