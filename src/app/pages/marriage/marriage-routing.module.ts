import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriagePage } from './marriage.page';

const routes: Routes = [
  {
    path: '',
    component: MarriagePage
  },
  {
    path: 'marriage',
    loadChildren: () => import('./marriage/marriage.module').then( m => m.MarriagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarriagePageRoutingModule {}
