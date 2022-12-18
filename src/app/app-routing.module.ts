import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhumancoComponent } from './uhumanco/uhumanco.component';

const routes: Routes = [
  {
    path : "",
    component : UhumancoComponent,
    children : [
        {
          path: '',
          loadChildren: () => import('./uhumanco/uhumanco.module').then(m => m.UhumancoModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
