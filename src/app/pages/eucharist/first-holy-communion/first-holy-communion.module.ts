import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstHolyCommunionPageRoutingModule } from './first-holy-communion-routing.module';

import { FirstHolyCommunionPage } from './first-holy-communion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstHolyCommunionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FirstHolyCommunionPage]
})
export class FirstHolyCommunionPageModule {}
