import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'mn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  title = '';
  group!: FormGroup;
  constructor(
    private reference: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data ? 'EDITAR' : 'NUEVO';
  }
  ngOnInit(): void {
    this.loadForm();
  }
  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?._id),
      title: new FormControl(this.data?.title, Validators.required),
      content: new FormControl(this.data?.content, Validators.required),
    });
  }
  save() {
    const record = this.group.value;
    this.reference.close(record);
    //se cierra pero se envía el registro al otro que requiera
  }
}
