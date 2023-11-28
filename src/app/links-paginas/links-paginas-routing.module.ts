import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksPaginasComponent } from './pages/links-paginas/links-paginas.component';

const routes: Routes = [
  { path: '', component: LinksPaginasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinksPaginasRoutingModule {}
