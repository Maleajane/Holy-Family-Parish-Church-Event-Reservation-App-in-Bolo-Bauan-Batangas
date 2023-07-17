import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThanksgivingPage } from './thanksgiving.page';

const routes: Routes = [
  {
    path: '',
    component: ThanksgivingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThanksgivingPageRoutingModule {}
