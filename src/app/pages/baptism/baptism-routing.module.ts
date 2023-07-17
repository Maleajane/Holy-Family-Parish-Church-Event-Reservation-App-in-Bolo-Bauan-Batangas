import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaptismPage } from './baptism.page';

const routes: Routes = [
  {
    path: '',
    component: BaptismPage
  },
  {
    path: 'infant-b',
    loadChildren: () => import('./infant-b/infant-b.module').then( m => m.InfantBPageModule)
  },
  {
    path: 'adult-b',
    loadChildren: () => import('./adult-b/adult-b.module').then( m => m.AdultBPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaptismPageRoutingModule {}
