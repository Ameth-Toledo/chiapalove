import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-fechas',
  standalone: true,
  imports: [],
  templateUrl: './card-fechas.component.html',
  styleUrl: './card-fechas.component.scss'
})
export class CardFechasComponent {
  @Input() fecha: string = "";
  @Input() evento: string = "";
  @Input() descripcion: string = "";
  @Input() ImageSrc: string = "";
}
