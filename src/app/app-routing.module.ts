import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'notas',
    loadChildren: () =>
      import('./notas-rapidas/notas-rapidas.module').then(
        (m) => m.NotasRapidasModule
      ),
  },
  {
    path: 'tareas',
    loadChildren: () =>
      import('./tareas/tareas.module').then(
        (m) => m.TareasModule
      )
  },
  {
    path: 'rutina',
    loadChildren: () =>
      import('./rutina/rutina.module').then(
        (m) => m.RutinaModule
      )
  },
  {
    path: 'enlaces',
    loadChildren: () =>
      import('./links-paginas/links-paginas.module').then(
        (m) => m.LinksPaginasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
