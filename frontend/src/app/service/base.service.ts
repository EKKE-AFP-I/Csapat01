import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id?: string }> {

  apiUrl = environment.apiUrl;
  entity: string = '';

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entity}`);
  }

  get(id: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entity}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entity}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${this.entity}/${entity.id}`, entity);
  }

  remove(id: any): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entity}/${id}`);
  }

  // ban(entity: T): Observable<T> {
  //   return this.http.patch<T>(`${this.apiUrl}${this.entity}/${entity.id}`, entity);
  // }

  // unban(entity: T): Observable<T> {
  //   return this.http.patch<T>(`${this.apiUrl}${this.entity}/${entity.id}`, entity);
  // }

}
