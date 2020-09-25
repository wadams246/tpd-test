import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileNavOpen = false;
  currentOpenSubmenu = '';

  constructor() { }

  ngOnInit() {
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  toggleSubMenu(submenu: string) {
    this.currentOpenSubmenu = submenu === this.currentOpenSubmenu ? '' : submenu;
  }

}
