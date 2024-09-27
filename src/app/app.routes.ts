import { Routes } from '@angular/router';
import { authGuard } from './shared/core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'testo',
        loadChildren: () => import('./pages/pages.routes').then(m => m.pagesRoutes),
        canActivate: [authGuard],
    },
    {
        path: 'demo',
        loadChildren: () => import('./modules/module/welcome.routes').then(m => m.moduleRoutes),
        canActivate: [authGuard],
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'testo'
    }
];
