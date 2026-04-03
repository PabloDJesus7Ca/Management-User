import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona, PersonaForms } from '../models/persona.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonasService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/personas';

  obtenerTodas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  buscar(nombre: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiUrl}/buscar?nombre=${nombre}`);
  }

  obtenerPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }

  crear(datos: PersonaForms): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, datos);
  }

  actualizar(id: number, datos: PersonaForms): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiUrl}/${id}`, datos);
  }

  eliminar(id: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.apiUrl}/${id}`);
  }
}
