import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { CardFechasComponent } from "../card-fechas/card-fechas.component";
import { CardFechasIzquierdoComponent } from "../card-fechas-izquierdo/card-fechas-izquierdo.component";

@Component({
  selector: 'app-fechas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardFechasComponent, CardFechasIzquierdoComponent],
  templateUrl: './fechas.component.html',
  styleUrl: './fechas.component.scss'
})
export class FechasComponent {

}
