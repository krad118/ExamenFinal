import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../interfaces/instructor';
import { InstructorsService } from '../../services/instructors.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(private instructorsService: InstructorsService) {
  }

  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors() {
    this.instructorsService.getInstructors().subscribe(
      instructors => this.instructors = instructors
    );
  }
}
