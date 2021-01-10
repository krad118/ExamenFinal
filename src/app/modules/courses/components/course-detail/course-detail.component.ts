import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/interfaces/course';
import { CourseService } from 'src/app/shared/services/course.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseId: number;
  course: Course;
  constructor(private coursesService: CourseService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      const id = this.getCourseId(params);
      this.coursesService.getCourse(Number(id)).subscribe(
        course => this.course = course
      );
    });
  }

  getCourseId(params: Params): number {
    return params.id;
  }
}
