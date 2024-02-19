import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-review-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './review-list.component.html',
    styleUrl: './review-list.component.scss',
})
export class ReviewListComponent {}
