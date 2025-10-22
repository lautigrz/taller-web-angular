import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { LoginUser, MessageEmail, RegisterResponse, RegisterUser, UpdatePasswordUser } from '../models/auth.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private userName = new BehaviorSubject<string | null>(null);
  userName$ = this.userName.asObservable();

  constructor(private http: HttpClient) { }

  register(data: RegisterUser): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseUrl}${environment.registerEndopint}`, data).pipe(
      tap(() => {

        this.userName.next(data.name)
      })
    )
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.loggedIn.next(false))
      );
  }

  login(data: LoginUser): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}${environment.loginEndpoint}`, data).pipe(
      tap(() => this.loggedIn.next(true))
    )
  }

  resetPassword(email: string): Observable<MessageEmail> {
    return this.http.post<MessageEmail>(`${this.baseUrl}${environment.emailCodePasswordEndpoint}`, email)
  }

  verificarTokenDeCambioDeContraseña(token: string) {
    return this.http.get<any>(`${this.baseUrl}${environment.verifyTokenEndpoint}`, { params: { token } })
  }

  updatePassword(data: UpdatePasswordUser): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}${environment.updatePasswordEndpoint}`, data)
  }

  getName(): string | null {
    return this.userName.getValue()
  }
}
