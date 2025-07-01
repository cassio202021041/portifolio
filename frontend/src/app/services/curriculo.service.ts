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
}
