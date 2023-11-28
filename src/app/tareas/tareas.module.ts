import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { PageTareasComponent } from './pages/page-tareas/page-tareas.component';
import { ZSharedModule } from '../z-shared/z-shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    PageTareasComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    ZSharedModule,
    MatIconModule
  ]
})
export class TareasModule { }
