import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tools } from '../components/tools/Tools';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  constructor(private http: HttpClient) {}

  URLBASE: string = 'http://localhost:3000/tools';

  findAll(): Observable<Tools[]> {
    return this.http.get<Tools[]>(this.URLBASE);
  }

  create(tool: Tools): Observable<Tools> {
    return this.http.post<Tools>(this.URLBASE, tool);
  }

  delete(id: number): Observable<void> {
    console.log(this.URLBASE + '/' + id);
    return this.http.delete<void>(this.URLBASE + '/' + id);
  }

  findByTag(tag: any): Observable<Tools[]> {
    let params = new HttpParams().set('tag', tag);
    return this.http.get<Tools[]>(this.URLBASE + '/tags', { params });
  }
}
