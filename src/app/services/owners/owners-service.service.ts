import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http:HttpClient) { }

  // private apiUrl = 'localhost:8080/api/v1/rms/owners';
  private apiUrl = '/api/v1/rms/owners';

    private apiUrl2 = '/api/v1/rms/owners/os';

  getOwners():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getOwnerIdAndName():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl2);
  }
}
