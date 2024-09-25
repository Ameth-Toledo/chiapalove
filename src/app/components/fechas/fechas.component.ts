import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardFechasComponent } from '../../components/card-fechas/card-fechas.component';
import { CardFechasIzquierdoComponent } from '../../components/card-fechas-izquierdo/card-fechas-izquierdo.component';

@Component({
  selector: 'app-fechas',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardFechasComponent, CardFechasIzquierdoComponent],
  templateUrl: './fechas.component.html',
  styleUrl: './fechas.component.scss'
})
export class FechasComponent {

}
