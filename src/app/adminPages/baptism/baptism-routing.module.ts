import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaptismPage } from './baptism.page';

const routes: Routes = [
  {
    path: '',
    component: BaptismPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaptismPageRoutingModule {}
