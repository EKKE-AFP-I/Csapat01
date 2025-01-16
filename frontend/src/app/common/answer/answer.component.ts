import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { QuizService } from '../../service/quiz.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-answer',
  standalone: true,
  imports: [],
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.scss'
})
export class AnswerComponent {

  @Input() answer: string = '';

  // list$ = this.quizService.getAll();

  constructor(
    // private quizService: QuizService,
    private router: Router,
  ) { }

}
