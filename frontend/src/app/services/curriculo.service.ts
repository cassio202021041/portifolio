import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private apiUrl = `${environment.apiBaseUrl}/curriculos`;

  constructor(private http: HttpClient) { }

  // GET /curriculos
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET /curriculos/{id}
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST /curriculos
  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // PUT /curriculos/{id}
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE /curriculos/{id}
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
getCurriculo(): Observable<any[]> {
  return this.getAll(); // Ou ajuste para buscar o que precisa
}

}
