import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'training-plan',
    pathMatch: 'full'
  },
  {
    path: 'training-plan',
    loadChildren: () => import('./pages/training-plan/training-plan.module').then( m => m.TrainingPlanPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'training-days',
    loadChildren: () => import('./pages/training-days/training-days.module').then( m => m.TrainingDaysPageModule)
  },
  {
    path: 'excercises',
    loadChildren: () => import('./pages/excercises/excercises.module').then( m => m.ExcercisesPageModule)
  },
  {
    path: 'excercise',
    loadChildren: () => import('./pages/excercise/excercise.module').then( m => m.ExcercisePageModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module').then( m => m.StatisticsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
