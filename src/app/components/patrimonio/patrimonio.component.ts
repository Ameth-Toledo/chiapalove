import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardPatrimonioComponent } from "../../components/card-patrimonio/card-patrimonio.component";

@Component({
  selector: 'app-patrimonio',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardPatrimonioComponent],
  templateUrl: './patrimonio.component.html',
  styleUrl: './patrimonio.component.scss'
})
export class PatrimonioComponent {

}
