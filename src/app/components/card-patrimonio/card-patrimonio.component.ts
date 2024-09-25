import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-patrimonio',
  standalone: true,
  imports: [],
  templateUrl: './card-patrimonio.component.html',
  styleUrl: './card-patrimonio.component.scss'
})
export class CardPatrimonioComponent {
  @Input() titulo : string = '';
  @Input() srcImg : string = '';
  @Input() accesorio : string = '';
  @Input() descripcion : string = '';
} 
