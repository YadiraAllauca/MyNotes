import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'mn-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Input() length!: number;
  pageSize = environment.PAGE_SIZE;
  currentPage = 0;

  constructor(paginatorIntl: MatPaginatorIntl) {
    paginatorIntl.itemsPerPageLabel = 'ítems por página:';
    paginatorIntl.firstPageLabel = 'Primera página';
    paginatorIntl.previousPageLabel = 'Página previa';
    paginatorIntl.nextPageLabel = 'Siguiente página';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.getRangeLabel = (currentPage: number, pageSize: number,
      length: number) => {
      length = Math.max(length, 0);
      const startIndex = currentPage * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    };
  }

  ngOnInit(): void {}

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value;
    this.onChangePage.emit(this.currentPage);
  }
}
