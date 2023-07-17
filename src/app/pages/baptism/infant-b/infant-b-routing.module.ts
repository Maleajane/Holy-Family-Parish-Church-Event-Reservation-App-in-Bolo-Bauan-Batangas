import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantBPage } from './infant-b.page';

const routes: Routes = [
  {
    path: '',
    component: InfantBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantBPageRoutingModule {}
