import { Component } from '@angular/core';

@Component({
    selector: 'app-our-team-two',
    imports: [],
    templateUrl: './our-team-two.component.html',
    styleUrl: './our-team-two.component.scss',
})
export class OurTeamTwoComponent {
    teamMembers = [
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
            image: 'shohan-1.png',
        },
        {
            name: 'Md Hosne Mobarak',
            position: 'Web Developer',
            image: 'user.jpg',
        },
        {
            name: 'Md Ferdous',
            position: 'Web Developer',
            image: 'ferdous.png',
        },
    ]
}
