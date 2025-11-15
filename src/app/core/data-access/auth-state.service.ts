import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Usuario {
  email: string
  name: string
  rol: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private userSubject = new BehaviorSubject<Usuario | null>(null);
  user$ = this.userSubject.asObservable();

  private loggedSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedSubject.asObservable();


  setUser(user: Usuario) {
    this.userSubject.next(user);
    this.loggedSubject.next(true);

  }


  clearUser() {
    this.userSubject.next(null);
    this.loggedSubject.next(false);

  }

  get user(): Usuario | null{
    return this.userSubject.value;
  }
  get isAuthenticated(): boolean {
  return this.loggedSubject.value;
}

}
