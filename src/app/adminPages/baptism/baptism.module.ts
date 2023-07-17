import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaptismPageRoutingModule } from './baptism-routing.module';

import { BaptismPage } from './baptism.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaptismPageRoutingModule
  ],
  declarations: [BaptismPage]
})
export class BaptismPageModule {}
