import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    TableComponent,
    PaginatorComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],exports:
    [
      HeaderComponent,
      BodyComponent,
      TableComponent,
      MatTableModule,
      PaginatorComponent,
      PerfectScrollbarModule,
      MatButtonModule

    ]
})
export class ZSharedModule { }
