import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutinaRoutingModule } from './rutina-routing.module';
import { PageRutinasComponent } from './pages/page-rutinas/page-rutinas.component';
import { ZSharedModule } from '../z-shared/z-shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    PageRutinasComponent
  ],
  imports: [
    CommonModule,
    RutinaRoutingModule,
    ZSharedModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class RutinaModule { }
