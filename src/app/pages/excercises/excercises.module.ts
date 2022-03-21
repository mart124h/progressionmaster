import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcercisesPageRoutingModule } from './excercises-routing.module';

import { ExcercisesPage } from './excercises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcercisesPageRoutingModule
  ],
  declarations: [ExcercisesPage]
})
export class ExcercisesPageModule {}
