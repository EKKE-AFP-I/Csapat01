import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {

  questionCount: number = 0;
  correctAnswersCount: number = 0;

  constructor (
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.questionCount = +params['questionCount']; // Retrieve and store the passed value
      this.correctAnswersCount = +params['correctAnswersCount']; // Retrieve and store the passed value
    });
  }

}
