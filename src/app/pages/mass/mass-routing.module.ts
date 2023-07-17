import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassPage } from './mass.page';

const routes: Routes = [
  {
    path: '',
    component: MassPage
  },
  {
    path: 'thanksgiving',
    loadChildren: () => import('./thanksgiving/thanksgiving.module').then( m => m.ThanksgivingPageModule)
  },
  {
    path: 'petition',
    loadChildren: () => import('./petition/petition.module').then( m => m.PetitionPageModule)
  },
  {
    path: 'mfts',
    loadChildren: () => import('./mfts/mfts.module').then( m => m.MftsPageModule)
  },
  {
    path: 'funeral',
    loadChildren: () => import('./funeral/funeral.module').then( m => m.FuneralPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassPageRoutingModule {}
