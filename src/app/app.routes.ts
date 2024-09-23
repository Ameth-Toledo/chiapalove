import { Routes } from '@angular/router';
import { PatrimonioComponent } from './components/patrimonio/patrimonio.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FechasComponent } from './components/fechas/fechas.component';

export const routes: Routes = [
    { path:"", redirectTo: "inicio", pathMatch:"full" },
    { path: "inicio", component: InicioComponent},
    { path: "patrimonio", component: PatrimonioComponent},
    { path: "fechas", component: FechasComponent}
];
