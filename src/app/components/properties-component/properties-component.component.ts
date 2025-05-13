import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponentComponent } from '../../ui/navbar-component/navbar-component.component';

@Component({
  selector: 'app-properties-component',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NavbarComponentComponent
  ],
  templateUrl: './properties-component.component.html',
  styleUrl: './properties-component.component.scss'
})
export class PropertiesComponentComponent {

}
