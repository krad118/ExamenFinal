import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      telefono: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  get f() {
    return this.contactForm.controls;
  }
}
