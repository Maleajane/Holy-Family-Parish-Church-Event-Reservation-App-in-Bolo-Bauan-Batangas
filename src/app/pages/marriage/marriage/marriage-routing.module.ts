import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriagePage } from './marriage.page';

const routes: Routes = [
  {
    path: '',
    component: MarriagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarriagePageRoutingModule {}
