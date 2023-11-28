import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRutinasComponent } from './pages/page-rutinas/page-rutinas.component';

const routes: Routes = [
  { path: '', component: PageRutinasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutinaRoutingModule { }
