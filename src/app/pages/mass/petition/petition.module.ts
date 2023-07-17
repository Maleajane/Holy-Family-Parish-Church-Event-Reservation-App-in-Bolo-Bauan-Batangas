import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetitionPageRoutingModule } from './petition-routing.module';

import { PetitionPage } from './petition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetitionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PetitionPage]
})
export class PetitionPageModule {}
