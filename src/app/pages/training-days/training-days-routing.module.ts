import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingDaysPage } from './training-days.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingDaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingDaysPageRoutingModule {}
