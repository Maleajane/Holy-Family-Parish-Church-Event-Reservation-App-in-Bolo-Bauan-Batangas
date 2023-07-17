import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdultBPage } from './adult-b.page';

const routes: Routes = [
  {
    path: '',
    component: AdultBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultBPageRoutingModule {}
