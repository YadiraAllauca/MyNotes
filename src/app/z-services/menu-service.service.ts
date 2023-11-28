import { Injectable } from '@angular/core';
export interface IMenu {
  title: string;
  url: string;
  icon: string;
}
@Injectable({
  providedIn: 'root',
})
export class MenuServiceService {
  private listMenu: IMenu[] = [
    {
      title: 'Notas',
      url: '/notas',
      icon: '../assets/notas.svg',
    },
    {
      title: 'Tareas',
      url: '/tareas',
      icon: '../assets/lapiz.svg',
    },
    {
      title: 'Rutina',
      url: '/rutina',
      icon: '../assets/rutina.svg',
    },
    {
      title: 'Enlaces',
      url: '/enlaces',
      icon: '../assets/link.svg',
    },
  ];
  constructor() {}
  getMenu(): IMenu[] {
    return [...this.listMenu];
  }
  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
