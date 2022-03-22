import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { menuItems } from './menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems : Menu[] = menuItems;

  constructor() { }

  ngOnInit(): void {
  }

}
