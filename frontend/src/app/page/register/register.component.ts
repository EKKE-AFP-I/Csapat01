import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable, switchMap, of } from 'rxjs';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id']) {
        return this.userService.get(params['id'])
      }
      return of(new User())
    })
  );

  passwordAgain: string = '';
  isUserAdmin: boolean = false;
  enteredAdminCode: string = '';
  adminCode: string = '#Admin$';
  errMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    // private authService: AuthService,
    private router: Router,
  ) { }

  register(user: User): void {
    let wasSomethingWrong = false;

    if (user.password !== this.passwordAgain) {
      wasSomethingWrong = true;
      this.errMessage = 'Two passwords are not the same.';
    }

    if (this.isUserAdmin) {
      if (this.enteredAdminCode != this.adminCode) {
        wasSomethingWrong = true;
        this.errMessage = 'Wrong admin code.';
      }
    }

    if (user.password === this.passwordAgain && !wasSomethingWrong){
      user.id = user.username;
      this.isUserAdmin ? user.role = 'admin' : user.role = 'user';
      this.userService.create(user)
      .subscribe({
        error: () => this.errMessage = 'Something went wrong',
        complete: () => {
          this.router.navigate(['login']);
          // this.onSuccess('Your account has been singed up.');
          // setTimeout(() => {
          //   this.onWarning('Don\'t tell your password to anyone!', 'Remember!');
          // }, 1000)
        }
      });
    }
  }


}
