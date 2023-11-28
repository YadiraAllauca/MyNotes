import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  IMenu,
  MenuServiceService,
} from 'src/app/z-services/menu-service.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'mn-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  listMenu: IMenu[];
  constructor(private menuService: MenuServiceService) {
    this.listMenu = menuService.getMenu();
  }
  ngOnInit(): void {}
}
