export type StatisticData = {
    id: number
    icon: string
    title: string
    amount: number
}

export const statisticData: StatisticData[] = [
    {
        id: 1,
        icon: 'heroRocketLaunchSolid',
        title: 'Launched',
        amount: 2023,
    },
    {
        id: 2,
        icon: 'heroDocumentTextSolid',
        title: 'Successful Projects',
        amount: 4,
    },
    {
        id: 3,
        icon: 'heroUserGroupSolid',
        title: 'Team Members',
        amount: 7,
    },
    {
        id: 4,
        icon: 'heroHomeModernSolid',
        title: 'Remote Workforce',
        amount: 100,
    },
]
