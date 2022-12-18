import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UhumancoRoutingModule } from './uhumanco-routing.module';
import { UhumancoComponent } from './uhumanco.component';


@NgModule({
  declarations: [
    UhumancoComponent
  ],
  imports: [
    CommonModule,
    UhumancoRoutingModule
  ]
})
export class UhumancoModule { }
