import { Component } from '@angular/core';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    NavbarComponentComponent,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
