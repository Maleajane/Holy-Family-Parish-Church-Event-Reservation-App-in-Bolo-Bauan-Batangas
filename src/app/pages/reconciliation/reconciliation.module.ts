import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReconciliationPageRoutingModule } from './reconciliation-routing.module';

import { ReconciliationPage } from './reconciliation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconciliationPageRoutingModule
  ],
  declarations: [ReconciliationPage]
})
export class ReconciliationPageModule {}
