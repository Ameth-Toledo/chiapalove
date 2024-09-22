import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { HeaderComponent } from "../header/header.component";
import { CardComponent } from "../card/card.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
