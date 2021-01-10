import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { InstructorsService } from './services/instructors.service';

@NgModule({
  declarations: [HomePageComponent, CourseContainerComponent, InstructorsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [{provide: InstructorsService}]
})
export class HomeModule { }
