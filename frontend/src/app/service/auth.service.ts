import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { flush } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.apiUrl;
  loggedUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  wasLoginSuccessful: boolean = true;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    const token = localStorage.getItem('authToken');
    token ? this.setLoginData(token) : this.resetLoginData();
  }


  // public getMe(id: string): Observable<User> {
  //   return this.http.get<User>(`${this.apiUrl}user/${id}`);
  // }

  public setLoginData(id: string) {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.userService.get(id).subscribe({
        next: (loginObject: User) => {
          this.loggedUser$.next(loginObject);
        }
      })
    }
  }

  public resetLoginData() {
    console.log("resetLoginData");
    this.loggedUser$.next(null);
  }


}
