import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { FormComponent } from '../../form/form.component';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'mn-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: String;
  @Input() date!: Date;
  @Input() content!: String;
  constructor() {}
  ngOnInit(): void {}
}
