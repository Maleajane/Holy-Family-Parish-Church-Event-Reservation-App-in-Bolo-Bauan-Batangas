import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstHolyCommunionPage } from './first-holy-communion.page';

const routes: Routes = [
  {
    path: '',
    component: FirstHolyCommunionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstHolyCommunionPageRoutingModule {}
