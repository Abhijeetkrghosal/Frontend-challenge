import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PricingComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  }
];


@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ] ,
  exports: [RouterModule]
})
export class PricingModule { }
