import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Marriage2Page } from './marriage2.page';

const routes: Routes = [
  {
    path: '',
    component: Marriage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Marriage2PageRoutingModule {}
