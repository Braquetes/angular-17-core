import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const authRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'login'
            }
        ]
    }
];