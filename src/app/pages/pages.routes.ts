import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { DemoComponent } from '../modules/module/pages/demo/demo.component';

export const pagesRoutes: Routes = [
    {
        path: '',
        component: SideMenuComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'demo',
                component: DemoComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'welcome'
            }
        ]
    }
];
