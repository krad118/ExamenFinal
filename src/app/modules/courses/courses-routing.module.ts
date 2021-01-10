import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursePageComponent } from '../courses/pages/course-page/course-page.component';
import { CourseDetailPageComponent } from '../courses/pages/course-detail-page/course-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: CoursePageComponent
  },
  {
    path: ':id',
    component: CourseDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
