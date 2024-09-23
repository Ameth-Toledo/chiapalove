import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-fechas-izquierdo',
  standalone: true,
  imports: [],
  templateUrl: './card-fechas-izquierdo.component.html',
  styleUrl: './card-fechas-izquierdo.component.scss'
})
export class CardFechasIzquierdoComponent {
  @Input() fechaizq : string = '';
  @Input() eventoIzq : string = '';
  @Input() descripcionIzq : string = '';
  @Input() ImageSrcIzq : string = '';
}
