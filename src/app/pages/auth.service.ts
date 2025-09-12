import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface RegisterPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    mobile: string;
}

export interface RegisterResponse {
    // Adjust according to real API. Keep generic for now.
    success?: boolean;
    message?: string;
    [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = environment.apiBase;

    login(email: string, password: string): Observable<any> {
        const url = `${this.baseUrl}/api/auth/login`;
        return this.http.post<any>(url, { email, password });
    }

    register(payload: RegisterPayload): Observable<RegisterResponse> {
        const url = `${this.baseUrl}/api/auth/initial-registration`;
        return this.http.post<RegisterResponse>(url, payload);
    }

    loggedIn(): boolean {
        return !!localStorage.getItem('token');
    }
}
