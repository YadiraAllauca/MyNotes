import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/z-shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mn-page-tareas',
  templateUrl: './page-tareas.component.html',
  styleUrls: ['./page-tareas.component.scss'],
})
export class PageTareasComponent implements OnInit {
  text: string = "NUEVA TAREA";
  records: any[] = [
    { description: 'prueba del parcial 1', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial 2', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial 3', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial 4', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial 5', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
    { description: 'prueba del parcial', date: '12/10/2022', status: 'Pendiente' },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'description', title: 'DESCRIPCIÓN' },
    { field: 'date', title: 'FECHA' },
    { field: 'status', title: 'ESTADO' },
  ];
  data: any[] = [];
  totalRecords = this.data.length;
  constructor() {
    this.loadTasks();
  }

  ngOnInit(): void {}

  loadTasks() {
    this.data = this.records;
    this.totalRecords = this.records.length;
    this.changePage(0);
  }
  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
    // skip es el inicio, el salto más el tamaño es el final
  }

}
