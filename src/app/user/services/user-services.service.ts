import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private baseUrl = 'https://reqres.in/api/users';
  
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}?page=${page}`)
      .pipe(map((response: any) => response));
  }
  getUserDetails(id: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/${id}`)
      .pipe(map((response: any) => response.data));
  }
}
