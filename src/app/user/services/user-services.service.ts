import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  private cachedUsers: any[] = [];
  private userDetailsCache: Map<number, any> = new Map();
  private baseUrl = 'https://reqres.in/api/users';
  

  constructor(private http: HttpClient) {}
  getUsers(page: number): Observable<any[]> {
    if (this.cachedUsers[page]) {
      return of(this.cachedUsers[page]);
    } else {
      return this.http.get(`${this.baseUrl}?page=${page}`).pipe(
        tap((data: any) => {
          this.cachedUsers[page] = data;
        }),
        map((data: any) => data)
      );
    }
  }

    getUserDetails(id: number): Observable<any> {
    if (this.userDetailsCache.has(id)) {
      return of(this.userDetailsCache.get(id));
    } else {
      return this.http.get(`${this.baseUrl}/${id}`).pipe(
        map((response: any) => response.data),
        tap((userDetails: any) => this.userDetailsCache.set(id, userDetails))
      );
    }
  }
}
