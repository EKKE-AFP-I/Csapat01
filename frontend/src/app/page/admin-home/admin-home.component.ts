import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { AnswerComponent } from '../../common/answer/answer.component';
import { Router, RouterModule } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    CommonModule,
    // AnswerComponent,
    MatButtonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {

  list$ = this.quizService.getAll();

  faSave = faSave;

  constructor(
    private quizService: QuizService,
    private router: Router,
  ) {  }

}
