import { Injectable } from '@angular/core';
import { Instructor } from '../interfaces/instructor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InstructorsService {
  apiUrl = `${environment.apiUrl}instructor/`;
  constructor(private http: HttpClient) {}

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}`);
  }
}
