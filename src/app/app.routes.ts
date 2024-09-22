import { Routes } from '@angular/router';
import { PatrimonioComponent } from './pages/patrimonio/patrimonio.component';

export const routes: Routes = [
    { path: 'patrimonio', component: PatrimonioComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
