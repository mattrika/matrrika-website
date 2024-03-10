import { Route } from '@angular/router'
import { HomeRoutes, getHomeRoutes } from '@pages/home/home.routes'
import { NotFoundPageRoutes, getNotFoundPageRoutes } from '@pages/not-found/not-found.routes'

type GroupedRoutes = [
    HomeRoutes,
    // catch-all route must be last
    NotFoundPageRoutes,
]

const groupedRoutes: GroupedRoutes = [getHomeRoutes(), getNotFoundPageRoutes()]

const flattenedRoutes: Route[] = []
// biome-ignore lint/complexity/noForEach: <explanation>
groupedRoutes.forEach((routeGroup) => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
