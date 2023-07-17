import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultBPageRoutingModule } from './adult-b-routing.module';

import { AdultBPage } from './adult-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultBPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AdultBPage]
})
export class AdultBPageModule {}
