import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Confirmation2Page } from './confirmation2.page';

const routes: Routes = [
  {
    path: '',
    component: Confirmation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Confirmation2PageRoutingModule {}
