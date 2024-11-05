import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { QuestionComponent } from './page/question/question.component';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';
import { AdminEditComponent } from './page/admin-edit/admin-edit.component';

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
    path: 'admin-home',
    title: 'Admin Home',
    component: AdminHomeComponent,
  },
  {
    path: 'admin-edit',
    title: 'Admin Editor',
    component: AdminEditComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];
