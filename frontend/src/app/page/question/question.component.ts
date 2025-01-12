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
    // AnswerComponent,
    MatButtonModule
    // ReactiveFormsModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  entity = 'quiz';
  list$ = this.quizService.getAll();

  questionCount: number = 10;
  currentQuizId: number = 0;
  answerSelected: boolean = false;
  selectedAnswer: string = '';
  success: number = 0;
  classSuccess1: string = '';
  classSuccess2: string = '';
  classSuccess3: string = '';
  classSuccess4: string = '';


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



  async selectAnswer(id: number, isCorrect: boolean) {
    this.answerSelected = true;
    isCorrect ? this.success = 1 : this.success = -1;
    switch (id) {
      case 1:
        isCorrect ? this.classSuccess1 = 'correct-answer' : this.classSuccess1 = 'incorrect-answer';
        break;
      case 2:
          isCorrect ? this.classSuccess1 = 'correct-answer' : this.classSuccess2 = 'incorrect-answer';
        break;
      case 3:
        isCorrect ? this.classSuccess1 = 'correct-answer' : this.classSuccess3 = 'incorrect-answer';
        break;
      case 4:
        isCorrect ? this.classSuccess1 = 'correct-answer' : this.classSuccess4 = 'incorrect-answer';
        break;
    }

    await this.waitForMiliseconds(600);
    this.answerSelected = false;
    this.success = 0;
    this.classSuccess1 = '';
    this.classSuccess2 = '';
    this.classSuccess3 = '';
    this.classSuccess4 = '';

    if (this.currentQuizId < this.questionCount) {
      this.currentQuizId++;
    } else {
      this.router.navigate([''])
    }
    // if (isCorrect) {
    // }


  }



  // setClass1(success: number): string {
  //   if (success == 1) {
  //     return 'correct-answer';
  //   } else if (success == -1) {
  //     return 'incorrect-answer';
  //   }
  //   return '';
  // }

  // setClass2(success: number): string {
  //   if (success == 1) {
  //     return 'correct-answer';
  //   } else if (success == -1) {
  //     return 'incorrect-answer';
  //   }
  //   return '';
  // }

  // setClass3(success: number): string {
  //   if (success == 1) {
  //     return 'correct-answer';
  //   } else if (success == -1) {
  //     return 'incorrect-answer';
  //   }
  //   return '';
  // }

  // setClass4(success: number): string {
  //   if (success == 1) {
  //     return 'correct-answer';
  //   } else if (success == -1) {
  //     return 'incorrect-answer';
  //   }
  //   return '';
  // }

  private waitForMiliseconds(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
