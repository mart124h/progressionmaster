import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingDaysPageRoutingModule } from './training-days-routing.module';

import { TrainingDaysPage } from './training-days.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingDaysPageRoutingModule
  ],
  declarations: [TrainingDaysPage]
})
export class TrainingDaysPageModule {}
