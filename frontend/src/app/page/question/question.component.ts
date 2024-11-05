import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from '../../common/answer/answer.component';
// import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    AnswerComponent,
    MatButtonModule
    // ReactiveFormsModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  entity = 'quiz';
  list$ = this.quizService.getAll();
  // quizForm: FormGroup;
  selectedAnswer: string = '';
  success?: number = 0;

  constructor(
    private quizService: QuizService,
    private router: Router,
  ) {
    // this.quizForm = new FormGroup({
    //   selectedAnswer: new FormControl('')
    // });

    // this.quizForm.get('selectedAnswer')?.valueChanges.subscribe((value) => {
    //   console.log('Kiválasztott válasz:', value);
    // });

  }

  selectAnswer(isCorrect: boolean) {
    isCorrect ? this.success = 1 : this.success = -1;

  }

}
