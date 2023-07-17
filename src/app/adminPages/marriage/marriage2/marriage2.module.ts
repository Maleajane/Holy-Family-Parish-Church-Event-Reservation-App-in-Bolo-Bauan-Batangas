import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Marriage2PageRoutingModule } from './marriage2-routing.module';

import { Marriage2Page } from './marriage2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Marriage2PageRoutingModule
  ],
  declarations: [Marriage2Page]
})
export class Marriage2PageModule {}
