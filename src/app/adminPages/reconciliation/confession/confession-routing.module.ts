import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfessionPage } from './confession.page';

const routes: Routes = [
  {
    path: '',
    component: ConfessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfessionPageRoutingModule {}
