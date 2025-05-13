import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
