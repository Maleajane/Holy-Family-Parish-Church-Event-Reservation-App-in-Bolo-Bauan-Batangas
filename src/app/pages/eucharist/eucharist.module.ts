import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EucharistPageRoutingModule } from './eucharist-routing.module';

import { EucharistPage } from './eucharist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EucharistPageRoutingModule
  ],
  declarations: [EucharistPage]
})
export class EucharistPageModule {}
