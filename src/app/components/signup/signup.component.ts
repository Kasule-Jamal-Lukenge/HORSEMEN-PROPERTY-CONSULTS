import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../../ui/navbar-component/navbar-component.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  imports: [
    MatInputModule,
    NavbarComponentComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

}
