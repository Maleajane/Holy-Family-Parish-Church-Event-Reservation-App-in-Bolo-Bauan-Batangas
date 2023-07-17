import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassPageRoutingModule } from './mass-routing.module';

import { MassPage } from './mass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassPageRoutingModule
  ],
  declarations: [MassPage]
})
export class MassPageModule {}
