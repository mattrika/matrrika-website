import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-registration',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
    openTermsModal() {}
    openPrivacyModal(){}
}
