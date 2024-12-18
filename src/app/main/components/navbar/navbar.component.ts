import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterLink, MatIconModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @Input() sidenavToggleVisible = true
    @Output() sidenavToggle = new EventEmitter<void>()

    toggle(): void {
        this.sidenavToggle.next()
    }
}
