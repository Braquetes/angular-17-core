import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SideMenuComponent } from '../../pages/side-menu/side-menu.component';

export const moduleRoutes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'welcome'
      }
    ]
  }
];
