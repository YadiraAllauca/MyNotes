import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRapidasRoutingModule } from './notas-rapidas-routing.module';
import { PageNotasComponent } from './pages/page-notas/page-notas.component';
import { ZSharedModule } from '../z-shared/z-shared.module';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card/card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [PageNotasComponent, CardComponent, FormComponent],
  imports: [
    CommonModule,
    NotasRapidasRoutingModule,
    ZSharedModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [CardComponent, FormComponent, ReactiveFormsModule],
})
export class NotasRapidasModule {}
