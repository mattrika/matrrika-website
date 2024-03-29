import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common'
import {
    provideHttpClient,
    withInterceptors,
    withJsonpSupport,
    withXsrfConfiguration,
} from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
    PreloadAllModules,
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withPreloading,
} from '@angular/router'
import { APP_ENVIRONMENT } from '@environment/app-environment.injector'
import { environment } from '@environment/environment'
import { AppRoutes } from './app.routes'

export const appConfig: ApplicationConfig = {
    providers: [
        { provide: APP_ENVIRONMENT, useValue: environment },
        { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate' } },
        provideHttpClient(withXsrfConfiguration({}), withJsonpSupport(), withInterceptors([])),
        provideRouter(
            AppRoutes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            }),
            withComponentInputBinding(),
            withPreloading(PreloadAllModules),
        ),
        importProvidersFrom(BrowserAnimationsModule),
    ],
}
