import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcercisesPage } from './excercises.page';

const routes: Routes = [
  {
    path: '',
    component: ExcercisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcercisesPageRoutingModule {}
