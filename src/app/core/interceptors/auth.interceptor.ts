import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authApiUrl = `${environment.base_url}/auth`;

  const token = localStorage.getItem('token')?.trim();
  const authService = inject(AuthService);
  const router = inject(Router);

  const excludedUrls = [
    `${authApiUrl}/login`,
    `${authApiUrl}/register`,
    `${authApiUrl}/forgot-password`,
  ];

  const isExcluded = excludedUrls.some(
    url => req.url.startsWith(url) || req.url.endsWith(url.replace(authApiUrl, '/auth'))
  );

  const authReq = (token && !isExcluded)
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !isExcluded) {
        authService.logout();
        router.navigate(['/auth/login']);
      }
      return throwError(() => error);
    })
  );
};
