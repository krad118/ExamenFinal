import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';

@NgModule({
  declarations: [NavbarComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
