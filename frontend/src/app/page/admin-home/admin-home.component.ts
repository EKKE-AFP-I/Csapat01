import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
// import { AnswerComponent } from '../../common/answer/answer.component';
import { Router, RouterModule } from '@angular/router';
import { QuizService } from '../../service/quiz.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faCircleCheck, faCircleXmark, faPenToSquare, faSave, faSquarePlus, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Quiz } from '../../model/quiz';

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

  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  faCheck = faCheck;
  faXmark = faXmark;
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faSquarePlus = faSquarePlus;
  faSave = faSave;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private renderer: Renderer2
  ) {  }

  ngOnInit(): void {
    this.renderer.setProperty(window, 'scrollTo', [0, 0]);
  }

  // constructor(
  //   private quizService: QuizService,
  //   private router: Router,
  // ) {  }

  onEditOne(quiz: Quiz): void {
    console.log();
    this.router.navigate([`admin-edit/${quiz.id}`]);
  }

  deleteQuiz(id: string): void {
    this.quizService.remove(id).subscribe({
      error: (err) => console.log('Error: ', err),
      complete: () => {
        this.list$ = this.quizService.getAll();
      }
    });
  }

}
