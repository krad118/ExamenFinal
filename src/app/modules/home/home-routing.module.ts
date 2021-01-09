import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursePageComponent } from '../courses/pages/course-page/course-page.component';
import { CourseDetailPageComponent } from '../courses/pages/course-detail-page/course-detail-page.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'course',
    component: CoursePageComponent
  },
  {
    path: 'course/:id',
    component: CourseDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
