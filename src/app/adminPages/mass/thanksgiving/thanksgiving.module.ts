import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThanksgivingPageRoutingModule } from './thanksgiving-routing.module';

import { ThanksgivingPage } from './thanksgiving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThanksgivingPageRoutingModule
  ],
  declarations: [ThanksgivingPage]
})
export class ThanksgivingPageModule {}
