import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    {
        path: 'aluno',
        loadChildren: () => import('./aluno/aluno.module').then(mod => mod.AlunoModule)
    }
    , { path: '**', redirectTo: 'home' }
];
