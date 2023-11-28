import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MetaDataColumn } from 'src/app/z-shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';
import { Activity } from '../../models/actividad.model';

@Component({
  selector: 'mn-page-rutinas',
  templateUrl: './page-rutinas.component.html',
  styleUrls: ['./page-rutinas.component.scss'],
})
export class PageRutinasComponent implements OnInit {
  text: String = 'NUEVA ACTIVIDAD';
  monday: Activity[] = [
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad L', done: ' ✔' },
  ];
  tuesday: Activity[] = [
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
  ];
  wednesday: Activity[] = [
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
  ];
  thursday: Activity[] = [
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad M', done: ' ✔' },
    { hour: '09H00', activity: 'Actividad ULTIMA', done: ' ✔' },
  ];
  records: any[] = [
    { day: 'LUNES', activities: this.monday },
    { day: 'MARTES', activities: this.tuesday },
    { day: 'MIÉRCOLES', activities: this.wednesday },
    { day: 'JUEVES', activities: this.thursday },
    { day: 'VIERNES', activities: this.thursday },
    { day: 'SÁBADO', activities: this.thursday },
    { day: 'DOMINGO', activities: this.thursday },
  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'hour', title: 'HORA' },
    { field: 'activity', title: 'ACTIVIDAD' },
    { field: 'done', title: 'HECHO' },
  ];
  constructor() {}
  ngOnInit(): void {}
}
