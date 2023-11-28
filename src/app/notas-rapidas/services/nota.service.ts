import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/notas.model';

@Injectable({
  providedIn: 'root',
})
export class NotaService {
  url = '/api/notas/';
  constructor(private http: HttpClient) {}
  loadNotes(): Observable<any> {
    return this.http.get(this.url);
  }
  loadNote(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  addNote(note: Nota): Observable<any> {
    return this.http.post(this.url, note);
  }
  updateNote(id: string, note: Nota): Observable<any> {
    return this.http.put(this.url + id, note);
  }
  deleteNote(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
