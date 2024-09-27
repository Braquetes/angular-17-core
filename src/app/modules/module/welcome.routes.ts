import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DemoComponent } from '../../pages/demo/demo.component';

export const moduleRoutes: Routes = [
  {
    path: '',
    component: SideMenuComponent,
    children: [
      {
        path: 'demo1',
        component: DemoComponent
      },
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
