import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CardComponent } from "../../components/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
