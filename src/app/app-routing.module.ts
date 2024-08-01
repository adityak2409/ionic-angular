import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dishes',
    pathMatch: 'full'
  },
  {
    path: 'dishes',
    loadChildren: () => import('./dishes/dishes.module').then(m => m.DishesPageModule)
  },
  {
    path: 'dish-detail/:dishId',
    loadChildren: () => import('./dish-detail/dish-detail.module').then(m => m.DishDetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
