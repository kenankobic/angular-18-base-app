import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { MatIconModule } from "@angular/material/icon";
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, MatIconModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  public layoutService = inject(LayoutService);

  public toggleMenu() {
    this.layoutService.toggleMenu();
  }
}
