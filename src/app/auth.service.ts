import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL: any = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  toogleLogin = signal<string>('Login');
  login(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post<any>(`${this.API_URL}/login`, data, { headers });
  }
  // private storeToken(token: string): void {
  //   console.log('first 1234');
  //   return localStorage.setItem('jwtToken', token);
  // }
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isUserloggedIn() {
    const token = this.getToken();
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
