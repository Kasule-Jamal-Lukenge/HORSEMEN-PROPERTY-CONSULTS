import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OwnersService } from '../../services/owners/owners-service.service';
import { NavbarComponentComponent } from '../../ui/navbar-component/navbar-component.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-owners-component',
  standalone: true,
  imports: [
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    NavbarComponentComponent,
  ],
  templateUrl: './owners-component.component.html',
  styleUrl: './owners-component.component.scss'
})
export class OwnersComponentComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'occupation', 'phone', 'email', 'address', 'actions'];

  constructor(private ownerService : OwnersService) { }

  ngOnInit(): void {
    this.fetchOwners();
  }

  fetchOwners() {
    this.ownerService.getOwners().subscribe(
      (data:any[]) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        console.log('Owners fetched successfully:', this.dataSource.data);
      },
      (error) => {
        console.error('Error fetching owners:', error);
      }
    )
  }
}
