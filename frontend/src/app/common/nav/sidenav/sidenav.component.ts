import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { faDiscord, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Input() inputSidenavClose!: MatSidenav;

  loggedUser$ = this.authService.loggedUser$;
  isAdmin: boolean = false;

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faXmark = faXmark;

  constructor(
    private authService: AuthService,
    // private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.loggedUser$) {
      this.loggedUser$.subscribe({
        next: (data: any) => {
          if (data?.role == 'admin') {
            this.isAdmin = true;
          }
        }
      })
    }
  }

}
