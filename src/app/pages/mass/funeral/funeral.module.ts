import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuneralPageRoutingModule } from './funeral-routing.module';

import { FuneralPage } from './funeral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuneralPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FuneralPage]
})
export class FuneralPageModule {}
