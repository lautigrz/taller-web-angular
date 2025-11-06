import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
   private loginVisibleSubject = new BehaviorSubject<boolean>(false);
  loginVisible$ = this.loginVisibleSubject.asObservable();

  showLogin() {
    this.loginVisibleSubject.next(true);
  }

  hideLogin() {
    this.loginVisibleSubject.next(false);
  }
}
