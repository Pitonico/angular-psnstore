import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-bar-itens',
  templateUrl: './menu-bar-itens.component.html',
  styleUrls: ['./menu-bar-itens.component.css']
})
export class MenuBarItensComponent {
  fa1: IconDefinition = faStar;
  fa2: IconDefinition = faLinkedin;
  fa3: IconDefinition = faGithub;
}
