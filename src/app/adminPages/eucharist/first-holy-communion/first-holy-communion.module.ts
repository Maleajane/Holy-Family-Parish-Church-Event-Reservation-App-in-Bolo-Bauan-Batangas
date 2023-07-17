import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstHolyCommunionPageRoutingModule } from './first-holy-communion-routing.module';

import { FirstHolyCommunionPage } from './first-holy-communion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstHolyCommunionPageRoutingModule
  ],
  declarations: [FirstHolyCommunionPage]
})
export class FirstHolyCommunionPageModule {}
