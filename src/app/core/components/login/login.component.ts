import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from './interfaces/usuario.interface';
import { LogueoService } from './services/logueo.service';

@Component({
  selector: 'mn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() logueado = new EventEmitter<boolean>();
  logueo: boolean = false;
  sendLogueado() {
    this.logueado.emit(this.logueo);
  }
  
  hidePassword = true;
  nickname: any;
  constructor(private userService: LogueoService) {
    this.loadUsers();
  }
  users: Usuario[] = [];
  loadUsers() {
    this.userService.loadUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  findUser(nickname: String, password: String) {
    for (let usuario of this.users) {
      if (usuario.nickname === nickname && usuario.password === password) {
        this.logueo = !this.logueo;
        this.sendLogueado();
      }
    }
  }
  ngOnInit(): void {}
}
