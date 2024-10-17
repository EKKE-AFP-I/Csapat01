import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { faDiscord, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Input() inputSidenavClose!: MatSidenav;

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faXmark = faXmark;

}
