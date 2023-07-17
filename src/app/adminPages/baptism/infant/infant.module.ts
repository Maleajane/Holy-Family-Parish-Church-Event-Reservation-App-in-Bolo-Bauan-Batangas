import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantPageRoutingModule } from './infant-routing.module';

import { InfantPage } from './infant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantPageRoutingModule
  ],
  declarations: [InfantPage]
})
export class InfantPageModule {}
