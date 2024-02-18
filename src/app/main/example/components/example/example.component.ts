import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-example',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './example.component.html',
    styleUrl: './example.component.scss',
})
export class ExampleComponent { }
