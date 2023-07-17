import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantPage } from './infant.page';

const routes: Routes = [
  {
    path: '',
    component: InfantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantPageRoutingModule {}
