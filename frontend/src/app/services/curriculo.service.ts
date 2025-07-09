import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private apiUrl = `${environment.apiBaseUrl}curriculo/listar`;

  constructor(private http: HttpClient) { }

  getCurriculo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
   // GET /curriculo/listar
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  // GET /curriculo/{id}
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST /curriculo/criar
  create(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/criar`, data);
  }

  // PUT /curriculo/atualizar/{id}
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/atualizar/${id}`, data);
  }

  // DELETE /curriculo/deletar/{id}
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deletar/${id}`);
  }
}
