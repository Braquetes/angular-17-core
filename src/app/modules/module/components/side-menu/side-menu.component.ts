import { Component } from '@angular/core';
import { MenuComponent } from '../../../../shared/menu/menu.component';
import { views } from '../../core/models/route';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public routes: any = views;

}
