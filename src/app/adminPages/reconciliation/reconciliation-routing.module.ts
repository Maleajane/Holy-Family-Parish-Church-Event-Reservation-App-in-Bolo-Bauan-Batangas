import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconciliationPage } from './reconciliation.page';

const routes: Routes = [
  {
    path: '',
    component: ReconciliationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconciliationPageRoutingModule {}
