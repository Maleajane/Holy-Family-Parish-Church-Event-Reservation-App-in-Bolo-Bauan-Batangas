import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfessionPageRoutingModule } from './confession-routing.module';

import { ConfessionPage } from './confession.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfessionPageRoutingModule
  ],
  declarations: [ConfessionPage]
})
export class ConfessionPageModule {}
