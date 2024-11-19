import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public menuOpen = signal(true);

  public toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  public closeMenu() {
    this.menuOpen.set(false);
  }

  public openMenu() {
    this.menuOpen.set(true);
  }
}
