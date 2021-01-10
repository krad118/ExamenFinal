import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course.service';

@Component({
  selector: 'app-course-container',
  templateUrl: './course-container.component.html',
  styleUrls: ['./course-container.component.scss']
})
export class CourseContainerComponent implements OnInit {
  courses: Course[] = [];
  constructor(private coursesService: CourseService) { }

  ngOnInit(): void {
    this.getCoursesFeatured();
  }

  getCoursesFeatured() {
    this.coursesService.getCoursesFeatured().subscribe(
      courses => this.courses = courses
    );
  }
}
