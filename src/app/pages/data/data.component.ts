import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type Tab = 'Inventory' | 'Customers' | 'Sales' | 'Reports';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
})
export class DataComponent implements OnInit  {
  tabs: Tab[] = ['Inventory', 'Customers', 'Sales', 'Reports'];
  active: Tab = 'Inventory';
  drawerOpen = true; // mobile state


  
  ngOnInit(): void {
    // this.drawerOpen = true
  }

  setActive(t: Tab) {
    this.active = t;
    // close the drawer on mobile; stays visible on md+ due to CSS
    this.drawerOpen = false;
  }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc() { this.drawerOpen = false; }
}
