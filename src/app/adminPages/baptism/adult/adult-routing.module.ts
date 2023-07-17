import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultPage } from './adult.page';

const routes: Routes = [
  {
    path: '',
    component: AdultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultPageRoutingModule {}
