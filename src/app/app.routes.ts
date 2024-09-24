import { Routes } from '@angular/router';
import { PatrimonioComponent } from './modules/patrimonio/patrimonio.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { FechasComponent } from './modules/fechas/fechas.component';
import { VideosComponent } from './modules/videos/videos.component';

export const routes: Routes = [
    { path:"", redirectTo: "inicio", pathMatch:"full" },
    { path: "inicio", component: InicioComponent},
    { path: "patrimonio", component: PatrimonioComponent},
    { path: "fechas", component: FechasComponent},
    { path: "videos", component: VideosComponent}
];
