import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/v1/rms/owners';

  getOwners():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }
}
