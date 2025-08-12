import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.base_url + '/auth';

  constructor(private http: HttpClient) { }

  register(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  verifyOtp(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp`, payload);
  }

  sendOtp(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-otp`, payload);
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, payload);
  }

  forgotPassword(payload: { email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, payload);
  }

  verifyOtpPasswordReset(payload: { email: string; otp_code: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify-otp-password-reset`, payload);
  }

  resetPassword(payload: { reset_token: string; password: string; password_confirmation: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, payload);
  }
}
