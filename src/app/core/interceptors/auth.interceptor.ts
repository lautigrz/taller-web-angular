import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "../../auth/data-acess/auth.service";
import { catchError, Observable, switchMap, throwError } from "rxjs";
import { inject } from "@angular/core";
import { AuthStateService } from "../data-access/auth-state.service";

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>,
    next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    const authService = inject(AuthService);

    if (req.url.includes('/auth/refresh')) {
        return next(req);
    }
    return next(req).pipe(
        catchError(err => {
            if (err.status === 401) {
                return authService.refreshToken().pipe(
                    switchMap(() => {
                        const retryReq = req.clone({ withCredentials: true });
                        return next(retryReq);
                    }),
                    catchError(innerErr => throwError(() => innerErr))
                );
            }
            return throwError(() => err);
        })
    );
}