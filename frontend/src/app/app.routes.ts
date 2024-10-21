import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QuestionComponent } from './page/question/question.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'question',
    title: 'Question',
    component: QuestionComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];
