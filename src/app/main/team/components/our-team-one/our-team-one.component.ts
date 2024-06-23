import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-our-team-one',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './our-team-one.component.html',
    styleUrl: './our-team-one.component.scss',
})
export class OurTeamOneComponent {
    items = [
        {
            name: 'A. Akhand',
            position: 'Co-founder & CEO',
            image: 'user.jpg',
        },
        {
            name: 'T. Rahman',
            position: 'Co-founder & CTO',
            image: 'user.jpg',
        },
        {
            name: 'Akramul Islam',
            position: 'Co-founder & Manager (HR)',
            image: 'akram.png',
        },
        {
            name: 'Ariful Haque',
            position: 'Web Developer',
            image: 'arif.png',
        },
        {
            name: 'Shohan Akhand',
            position: 'Web Developer',
            image: 'shohan.png',
        },
        {
            name: 'Murad Ahmed',
            position: 'Web Developer',
            image: 'user.jpg',
        },
        {
            name: 'Mehdad Hussain',
            position: 'Web Developer',
            image: 'mehdad.png',
        },
    ]
}
