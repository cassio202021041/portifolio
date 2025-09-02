import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = `${environment.apiBaseUrl}/formulario`;

  constructor(private http: HttpClient) { }

  // GET /formulario (lista todos)
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET /formulario/{id}
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // POST /formulario (cria novo)
  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // PUT /formulario/{id} (atualiza existente)
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // DELETE /formulario/{id}
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Reseta todos os campos do formulário
  resetForm(form: FormGroup): void {
    form.reset();
  }

  // Preenche o formulário com os dados fornecidos
  patchForm(form: FormGroup, data: any): void {
    form.patchValue(data);
  }

  // Exemplo de validação customizada: campo obrigatório
  isFieldInvalid(form: FormGroup, field: string): boolean {
    const control = form.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  // Exemplo de obtenção dos erros de um campo
  getFieldErrors(form: FormGroup, field: string): any {
    return form.get(field)?.errors || {};
  }
}
