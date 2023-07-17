import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarriagePageRoutingModule } from './marriage-routing.module';

import { MarriagePage } from './marriage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarriagePageRoutingModule
  ],
  declarations: [MarriagePage]
})
export class MarriagePageModule {}
