import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PersonasService } from '../../services/persona.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-list',
  imports: [FormsModule, RouterLink],
  templateUrl: './persona-list.html',
  styleUrl: './persona-list.css',
})
export class PersonaList implements OnInit {
  private service = inject(PersonasService);
  personas = signal<Persona[]>([]);
  cargando = signal<boolean>(false);
  error = signal<string>('');
  busqueda = signal<string>('');

  ngOnInit(): void {
    this.cargarTodas();
  }

  cargarTodas(): void {
    this.cargando.set(true);
    this.error.set('');
    this.service.obtenerTodas().subscribe({
      next: (data) => this.personas.set(data),
      error: () => this.error.set('Error al cargar personas'),
      complete: () => this.cargando.set(false),
    });
  }

  buscar(): void {
    const texto = this.busqueda().trim();
    if (!texto) {
      this.cargarTodas();
      return;
    }
    this.cargando.set(true);
    this.service.buscar(texto).subscribe({
      next: (data) => this.personas.set(data),
      error: () => this.error.set('Error al buscar'),
      complete: () => this.cargando.set(false),
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Estás seguro de eliminar esta persona?')) return;
    this.service.eliminar(id).subscribe({
      next: () => this.cargarTodas(),
      error: () => this.error.set('Error al eliminar'),
    });
  }
}
