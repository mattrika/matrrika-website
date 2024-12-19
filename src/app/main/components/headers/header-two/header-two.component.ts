import { CommonModule, NgClass } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import {
    heroHome,
    heroCog6Tooth,
    heroUserGroup,
    heroEnvelope,
    heroExclamationCircle,
} from '@ng-icons/heroicons/outline'

@Component({
    selector: 'app-header-two',
    imports: [CommonModule, RouterModule, NgClass, NgIconComponent],
    templateUrl: './header-two.component.html',
    styleUrl: './header-two.component.scss',
    viewProviders: [provideIcons({ heroHome, heroCog6Tooth, heroUserGroup, heroEnvelope, heroExclamationCircle })],
})
export class HeaderTwoComponent {
    headerRoute = [
        {
            url: 'home',
            title: 'Home',
            icon: heroHome,
        },
        {
            url: 'services',
            title: 'Services',
            icon: heroCog6Tooth,
        },
        {
            url: 'about-us',
            title: 'About Us',
            icon: heroExclamationCircle,
        },
        {
            url: 'team',
            title: 'Team',
            icon: heroUserGroup,
        },
        {
            url: 'contact-us',
            title: 'Contact Us',
            icon: heroEnvelope,
        },
    ]

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
