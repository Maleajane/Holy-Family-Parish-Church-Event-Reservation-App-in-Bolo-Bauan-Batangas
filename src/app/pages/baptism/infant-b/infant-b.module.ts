import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantBPageRoutingModule } from './infant-b-routing.module';

import { InfantBPage } from './infant-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantBPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InfantBPage]
})
export class InfantBPageModule {}
