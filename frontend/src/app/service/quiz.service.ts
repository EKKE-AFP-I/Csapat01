import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Quiz } from '../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseService<Quiz> {

  constructor(
    public override http: HttpClient
    ) {
    super(http);
    this.entity = 'quiz';
  }
}
