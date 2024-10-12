export type FaqData = {
    id: number
    question: string
    answer: string
}

export const faqData: FaqData[] = [
    {
        id: 1,
        question: 'Could you share some examples of websites you have designed and developed?',
        answer: 'Certainly! We have a diverse portfolio that highlights our work, giving you a clear sense of our capabilities and design style.',
    },
    {
        id: 2,
        question: 'What is your approach to building a website from the ground up?',
        answer: 'We follow a structured approach that includes research, design, development, testing, and launch, ensuring a well-organized and efficient project flow.',
    },
    {
        id: 3,
        question: 'What is the estimated timeline for completing my website?',
        answer: 'Timelines can vary based on your goals, but typically, a project takes 2 to 4 months, depending on its complexity and features.',
    },
]
