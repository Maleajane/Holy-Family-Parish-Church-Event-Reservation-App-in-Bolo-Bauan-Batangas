import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetitionPage } from './petition.page';

const routes: Routes = [
  {
    path: '',
    component: PetitionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetitionPageRoutingModule {}
