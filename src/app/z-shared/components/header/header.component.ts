import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IMenu,
  MenuServiceService,
} from 'src/app/z-services/menu-service.service';

@Component({
  selector: 'mn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  path: IMenu;
  constructor(
    private menuService: MenuServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getMenuByUrl(currentPath);
  }

  ngOnInit(): void {}
}
