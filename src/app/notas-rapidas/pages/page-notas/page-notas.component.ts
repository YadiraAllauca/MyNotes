import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../../form/form.component';
import { NotaService } from '../../services/nota.service';

@Component({
  selector: 'mn-page-notas',
  templateUrl: './page-notas.component.html',
  styleUrls: ['./page-notas.component.scss'],
})
export class PageNotasComponent implements OnInit {
  text: string = 'NUEVA NOTA';
  constructor(
    private noteService: NotaService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.loadNotes();
  }
  loadNotes() {
    this.noteService.loadNotes().subscribe(
      (data) => {
        this.records = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  records: any[] = [];
  ngOnInit(): void {}
  delete(id: any = null) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
      this.showMessage('Registro eliminado');
    });
  }
  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disabledClose: true,
      data: row,
    };

    const reference: MatDialogRef<FormComponent> = this.dialog.open(
      FormComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const nota = { ...response };
        this.noteService.updateNote(response.id, nota).subscribe(() => {
          this.loadNotes();
          this.showMessage('Registro actualizado');
        });
      } else {
        const nota = { ...response };
        this.noteService.addNote(nota).subscribe(() => {
          this.loadNotes();
          this.showMessage('Registro exitoso');
        });
      }
    });
  }
  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration });
  }
}
