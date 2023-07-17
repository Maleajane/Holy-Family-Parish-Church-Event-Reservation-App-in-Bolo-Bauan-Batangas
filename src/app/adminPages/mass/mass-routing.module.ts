import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassPage } from './mass.page';

const routes: Routes = [
  {
    path: '',
    component: MassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassPageRoutingModule {}
