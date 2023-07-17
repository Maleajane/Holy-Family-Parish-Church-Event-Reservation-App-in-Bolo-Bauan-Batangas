import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EucharistPage } from './eucharist.page';

const routes: Routes = [
  {
    path: '',
    component: EucharistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EucharistPageRoutingModule {}
