import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class LogueoService {
  url = '/api/users/';
  constructor(private http: HttpClient) {}
  loadUsers(): Observable<any> {
    return this.http.get(this.url);
  }
  loadUser(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  addUser(user: Usuario): Observable<any> {
    return this.http.post(this.url, user);
  }
  updateUser(id: string, user: Usuario): Observable<any> {
    return this.http.put(this.url + id, user);
  }
}
