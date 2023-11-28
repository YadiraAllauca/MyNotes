import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksPaginasRoutingModule } from './links-paginas-routing.module';
import { LinksPaginasComponent } from './pages/links-paginas/links-paginas.component';
import { ZSharedModule } from '../z-shared/z-shared.module';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LinksPaginasComponent
  ],
  imports: [
    CommonModule,
    LinksPaginasRoutingModule,
    ZSharedModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class LinksPaginasModule { }
