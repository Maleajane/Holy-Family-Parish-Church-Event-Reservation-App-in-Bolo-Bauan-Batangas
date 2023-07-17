import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Confirmation2PageRoutingModule } from './confirmation2-routing.module';

import { Confirmation2Page } from './confirmation2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Confirmation2PageRoutingModule
  ],
  declarations: [Confirmation2Page]
})
export class Confirmation2PageModule {}
