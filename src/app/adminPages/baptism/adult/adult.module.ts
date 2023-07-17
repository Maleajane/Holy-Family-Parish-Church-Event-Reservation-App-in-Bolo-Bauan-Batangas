import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultPageRoutingModule } from './adult-routing.module';

import { AdultPage } from './adult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultPageRoutingModule
  ],
  declarations: [AdultPage]
})
export class AdultPageModule {}
