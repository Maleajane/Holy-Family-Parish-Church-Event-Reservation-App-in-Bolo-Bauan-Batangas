import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetitionPageRoutingModule } from './petition-routing.module';

import { PetitionPage } from './petition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetitionPageRoutingModule
  ],
  declarations: [PetitionPage]
})
export class PetitionPageModule {}
