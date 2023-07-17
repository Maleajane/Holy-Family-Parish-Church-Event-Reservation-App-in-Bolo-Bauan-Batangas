import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReconciliationPage } from './reconciliation.page';

const routes: Routes = [
  {
    path: '',
    component: ReconciliationPage
  },
  {
    path: 'confession',
    loadChildren: () => import('./confession/confession.module').then( m => m.ConfessionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReconciliationPageRoutingModule {}
