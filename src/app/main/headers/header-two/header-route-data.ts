import {
    heroUsers,
    heroHome,
    heroCog6Tooth,
    heroUserGroup,
    heroEnvelope,
    heroExclamationCircle,
} from '@ng-icons/heroicons/outline'

export type HeaderRoute = {
    id: number
    url: string
    title: string
    icon?: string
}

export const headerRoute: HeaderRoute[] = [
    {
        id: 1,
        url: 'home',
        title: 'Home',
        icon: heroHome,
    },
    {
        id: 2,
        url: 'services',
        title: 'Services',
        icon: heroCog6Tooth,
    },
    {
        id: 3,
        url: 'about-us',
        title: 'About Us',
        icon: heroExclamationCircle,
    },
    {
        id: 4,
        url: 'team',
        title: 'Team',
        icon: heroUserGroup,
    },
    {
        id: 5,
        url: 'contact-us',
        title: 'Contact Us',
        icon: heroEnvelope,
    },
]
