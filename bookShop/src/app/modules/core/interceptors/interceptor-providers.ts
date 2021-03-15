import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { TimingInterceptor } from './timing.interceptor';
import { CatchErrorInterceptor } from './catch-error.interceptor';

export const InceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CatchErrorInterceptor,
        multi: true,
    }
];