export type User = {
    name: string
    designation: string
    address: string
}

export type Testimonial = {
    id: number
    description: string
    user: User
}

export const testimonialData: Testimonial[] = [
    {
        id: 1,
        description:
            'Of everything I’ve done in this project, deciding to work with Mattrika Technologies has been by far the best decision I have made, truly. And I cannot thank them enough. Now, all I have to do is make sure this becomes a big big success.',
        user: {
            name: 'Shannon Kempenich',
            designation: 'CEO, ContentERP',
            address: 'USA',
        },
    },
    {
        id: 2,
        description:
            'Mattrika Technologies enabled us expand our e-commerce business in Germany. They are a team of professionals who are always ready to go the extra mile to deliver the best results. Their continued support and consultations are invaluable to us.',
        user: {
            name: 'Al Amin',
            designation: 'CEO, MA Kleid',
            address: 'Germany',
        },
    },
]
