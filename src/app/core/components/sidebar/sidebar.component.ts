import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MENU } from '../../types/menu';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public menu = MENU;
  public layoutService = inject(LayoutService);
}
