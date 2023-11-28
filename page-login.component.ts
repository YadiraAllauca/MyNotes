import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mn-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  logueado: boolean = false;
  constructor() { }
  receiveMessage(logueado: boolean) {
    this.logueado = logueado;
  }
  ngOnInit(): void {
  }

}
