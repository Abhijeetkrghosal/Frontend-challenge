import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: NavbarComponent,
      },
    ]),
  ],
  exports: [
    NavbarComponent
  ]
})
export class LayoutModule { }
