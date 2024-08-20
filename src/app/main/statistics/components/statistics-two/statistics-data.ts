export type StatisticData = {
    id: number
    icon:string
    title: string
    amount: number | string
}

export const statisticData: StatisticData[] = [
    {
        id: 1,
        icon: 'heroRocketLaunchSolid',
        title: 'Launched successfully',
        amount: 2023,
    },
    {
        id: 2,
        icon: 'heroDocumentTextSolid',
        title: 'Current Projects',
        amount: '3+',
    },
    {
        id: 3,
        icon: 'heroUserGroupSolid',
        title: 'Team Members',
        amount: 8,
    },
    {
        id: 1,
        icon: 'heroHomeModernSolid',
        title: 'Remote Workforce',
        amount: '100%',
    },
]
