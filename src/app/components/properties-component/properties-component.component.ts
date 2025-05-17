import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponentComponent } from '../../ui/navbar-component/navbar-component.component';
import { PropertiesService } from '../../services/properties/properties-service.service';
import { CommonModule } from '@angular/common';
import { Property } from '../../models/Property';
import { OwnersService } from '../../services/owners/owners-service.service';
import { Owner } from '../../models/Owner';

@Component({
  selector: 'app-properties-component',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NavbarComponentComponent,
    CommonModule
  ],
  templateUrl: './properties-component.component.html',
  styleUrl: './properties-component.component.scss'
})
export class PropertiesComponentComponent implements OnInit{

  properties : Property[] = [];
  ownersList : Owner[] = [];

  constructor(
    private propertyService : PropertiesService,
    private ownersService : OwnersService
  ){}

  ngOnInit() {
      this.getAllProperties();
      this.getAllOwners();
  }

  getRows(properties: Property[]): Property[][] {
    const rows = [];
    for (let i = 0; i < properties.length; i += 4) {
      rows.push(properties.slice(i, i + 4));
    }
    return rows;
  }


  getAllProperties(){
    this.propertyService.getProperties().subscribe(
      (data :Property[]) => {
        this.properties = data;
        console.log("Properties found: ", this.properties);
      },(error) => {
        console.error("Couldn't fetch Properties");
      }
    )
  }

  // console.log("Getting Owners By Id And Name");


  getAllOwners(){
    console.log("Getting Owners By Id And Name");
    this.ownersService.getOwnerIdAndName().subscribe(
      (data) => {
        this.ownersList = data;
        console.log("----Owners List By Id And Name: ------")
        console.log(this.ownersList);
      },
      (error) => {
        console.log("Error: ", error);
      }
    )
  }
}
