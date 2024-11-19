import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./core/components/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'features-test';

  count = signal(0);
  smount = { num: 1, str: 'kenan'}

  ngOnInit(): void {
    setTimeout(() => {
      this.count.update(value => value + 1);
    }, 2000);
  }

  btnClick() {
    this.smount = { num: 2, str: 'not Kenan'}
  }
}
