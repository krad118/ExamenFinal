import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from 'src/app/shared/interfaces/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  apiUrl = `${environment.apiUrl}course/`;
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}`);
  }

  getCoursesFeatured(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}?featured=1`);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}${id}/`);
  }
}
