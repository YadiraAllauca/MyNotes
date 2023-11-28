import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from 'src/app/z-shared/interfaces/metacolumn.interface';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'mn-links-paginas',
  templateUrl: './links-paginas.component.html',
  styleUrls: ['./links-paginas.component.scss']
})
export class LinksPaginasComponent implements OnInit {
  text: string = "NUEVO ENLACE";
  records: any[] = [
    { pageName: 'NOMBRE', title: 'cambio climático', link: 'https://www.google.com/', comment: 'Leer pronto' },
    { pageName: 'NOMBRE',title: 'cambio climático', link: 'https://www.wikipedia.org/', comment: 'Leer pronto' },
    { pageName: 'NOMBRE',title: 'cambio climático', link: 'www.cambioclimatico.com', comment: 'Leer pronto' },
    { pageName: 'NOMBRE',title: 'cambio climático', link: 'www.cambioclimatico.com', comment: 'Leer pronto' },
    { pageName: 'NOMBRE',title: 'cambio climático', link: 'www.cambioclimatico.com', comment: 'Leer pronto' },

  ];
  metaDataColumns: MetaDataColumn[] = [
    { field: 'pageName', title: 'PÁGINA' },
    { field: 'title', title: 'TÍTULO' },
    { field: 'comment', title: 'SOBRE' },
  ];
  data: any[] = [];
  totalRecords = this.data.length;
  constructor() {
    this.loadLinks();
  }

  ngOnInit(): void {}

  loadLinks() {
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
