import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { QuizService } from '../../service/quiz.service';
import { Quiz } from '../../model/quiz';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faSave, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-edit',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './admin-edit.component.html',
  styleUrl: './admin-edit.component.scss'
})
export class AdminEditComponent {

  quiz$: Observable<Quiz> = this.activatedRoute.params.pipe(
    switchMap(params => {
      if (params['id']) {
        return this.quizService.get(params['id'])
      }
      let newQuiz = new Quiz();
      newQuiz.correctAnswer = 1;
      return of(newQuiz)
    })
  );

  clicked: boolean = false;

  faSave = faSave;
  faSync = faSync;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}


  onUpdate(quiz: Quiz): void {
    this.clicked = true;
    if (quiz.id === '') {
      this.quizService.getAll()
      .subscribe({
        error: (error) => console.log(error),
        next: (quizes) => {
          quiz.id = (parseInt(quizes[quizes.length - 1].id) + 1).toString();
          this.quizService.create(quiz)
          .subscribe({
            error: (error) => console.log(error), //this.onDanger('We could not create the shop item.<br>Please try again later!', 'Something went wrong.')
            complete: () => {
              this.router.navigate(['admin-home']);
              // this.onSuccess('admin-home item created.');
            }
          });
          // this.onSuccess('admin-home item created.');
        }
      })
    } else {
      this.quizService.update(quiz)
      .subscribe({
        error: (error) => console.log(error), // this.onDanger('We could not update the admin-home item.<br>Please try again later!', 'Something went wrong.'),
        complete: () => {
          this.router.navigate(['admin-home']);
          // this.onSuccess('Shop item updated.');
        }
      });
    }
  }

  // onDanger(arg0: string, arg1: string): void {
  //   throw new Error('Method not implemented.');
  // }
  // onSuccess(arg0: string) {
  //   throw new Error('Method not implemented.');
  // }


  consoleWrite(obj: any) {
    console.log(obj);
  }

}
