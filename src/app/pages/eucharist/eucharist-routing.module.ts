import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EucharistPage } from './eucharist.page';

const routes: Routes = [
  {
    path: '',
    component: EucharistPage
  },
  {
    path: 'first-holy-communion',
    loadChildren: () => import('./first-holy-communion/first-holy-communion.module').then( m => m.FirstHolyCommunionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EucharistPageRoutingModule {}
